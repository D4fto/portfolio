import { Technology } from '../types';

export const getTechIcon = (tech: Technology): string => {
  const iconMap: Record<Technology, string> = {
    react: 'ti-brand-react',
    nodejs: 'ti-brand-nodejs',
    html5: 'ti-brand-html5',
    css3: 'ti-brand-css3',
    javascript: 'ti-brand-javascript',
    typescript: 'ti-brand-typescript',
    mysql: 'ti-brand-mysql',
    python: 'ti-brand-python',
    csharp: 'ti-brand-c-sharp',
    tailwind: 'ti-brand-tailwind'
  };
  
  return iconMap[tech] || 'ti-code';
};

export const getOrCreateUserId = (): string => {
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem('user_id', userId);
  }
  return userId;
};

export const sendAnalytics = async (): Promise<void> => {
  try {
    console.log(":(")
    await fetch(import.meta.env.VITE_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `📊 Acessaram meu portfólio
        🕒 ${new Date().toLocaleString()}
        🆔 ${getOrCreateUserId()}
        ----------------------------------`,
      }),
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

export const preloadProjects = (): void => {
  const links = [
    'https://epicgomes.onrender.com/',
    'https://agroview-sjsk.onrender.com/',
    'https://sapatariapf.onrender.com/',
  ];
  
  links.forEach(link => {
    console.log("loading "+link)
    fetch(link, {
      method: 'GET',
      mode: 'no-cors'
    }).then(()=>console.log(link + " loaded")).catch(() => {
      // Silent fail for preloading
    });
  });
};
