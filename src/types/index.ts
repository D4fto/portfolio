export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
}

export type Technology = 
  | 'react'
  | 'nodejs'
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'typescript'
  | 'mysql'
  | 'python'
  | 'csharp'
  | 'tailwind';

export interface ContactInfo {
  type: 'email' | 'linkedin' | 'github';
  label: string;
  value: string;
  url: string;
  icon: string;
}
