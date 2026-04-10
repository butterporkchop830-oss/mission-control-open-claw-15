import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // This would connect to your OpenClaw gateway
    // For now, returning mock data based on your agent structure
    
    const agents = [
      {
        id: 'strategist',
        name: 'Strategist',
        role: 'Chief Strategy Officer',
        description: 'Revenue & Market Analysis',
        status: 'active',
        capabilities: ['Revenue analysis', 'Market research', 'Competitive intelligence']
      },
      {
        id: 'builder',
        name: 'Builder',
        role: 'VP Engineering',
        description: 'Code & ML Training',
        status: 'active',
        capabilities: ['Code generation', 'ML model training', 'System architecture']
      },
      {
        id: 'marketer',
        name: 'Marketer',
        role: 'CMO',
        description: 'Campaigns & Content',
        status: 'idle',
        capabilities: ['Campaign planning', 'Content creation', 'Social media strategy']
      },
      {
        id: 'executor',
        name: 'Executor',
        role: 'Head of Operations',
        description: 'Tasks & Deadlines',
        status: 'active',
        capabilities: ['Task management', 'Deadline tracking', 'Resource allocation']
      },
      {
        id: 'creative',
        name: 'Creative',
        role: 'Chief Creative Officer',
        description: 'Videos & Design',
        status: 'idle',
        capabilities: ['Video production', 'Graphic design', 'Visual content']
      }
    ];

    return NextResponse.json({
      success: true,
      data: agents,
      count: agents.length,
      model: 'openai-codex',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch agents', details: error.message },
      { status: 500 }
    );
  }
}
