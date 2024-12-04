import { Roboto, Inter, Montserrat } from 'next/font/google'

const roboto_init = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '700'],
    variable: '--font-roboto',
  });
  
  const inter_init = Inter({
    subsets: ['latin'],
    weight: ['100', '300', '700'],
    variable: '--font-inter',
  });
  
  const montserrat_init = Montserrat({
    subsets: ['latin'],
    weight: ['100', '300', '700'],
    variable: '--font-montserrat',
  });

  export const roboto = roboto_init.variable;
  export const inter = inter_init.variable;
  export const montserrat = montserrat_init.variable;