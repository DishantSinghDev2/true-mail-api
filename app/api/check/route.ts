import { NextResponse } from 'next/server';
import { DISPOSABLE_DOMAINS } from '@/lib/domains';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email parameter is required' }, { status: 400 });
  }

  // Basic format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  const domain = email.split('@')[1].toLowerCase();
  const isDisposable = DISPOSABLE_DOMAINS.has(domain);
  
  // Simulation of advanced checks
  const isRoleAccount = /^(admin|support|info|sales|contact|hello)@/.test(email);
  const isFreeProvider = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'].includes(domain);

  let riskScore = 0;
  if (isDisposable) riskScore = 100;
  else if (isRoleAccount) riskScore += 30;
  else if (isFreeProvider) riskScore += 10;

  return NextResponse.json({
    email,
    domain,
    is_disposable: isDisposable,
    is_role_account: isRoleAccount,
    is_free_provider: isFreeProvider,
    risk_score: riskScore,
    verdict: isDisposable ? 'block' : riskScore > 50 ? 'flag' : 'allow',
    checked_at: new Date().toISOString()
  });
}
