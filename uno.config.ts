import extractorSvelte from '@unocss/extractor-svelte';
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import type { Theme } from 'unocss/preset-uno';

export default defineConfig<Theme>({
  extractors: [extractorSvelte()],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        default: 'Poppins:300,400,500,600,700,800,900',
      },
    }),
    presetIcons(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'h-navbar': 'h-[4.5rem] md:h-[5rem]',
    'scroll-m-navbar': 'scroll-mt-[5.3rem] md:scroll-mt-[6.8rem]',
    'section-header':
      'text-gray-50 font-black text-[1.5rem] sm:text-[1.6rem] md-text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem]',
    'section-subheader': 'text-[0.9rem] sm:text-[1.2rem] text-gray-400 uppercase tracking-wider',
    'section-description':
      'text-gray-400 font-medium text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] leading-[1.5rem] md:leading-9 text-justify sm:text-start',
    'shadow-primary-card': 'shadow-card shadow-primary-50/10',
    btn: 'bg-primary-600 hover:scale-102  px-4.5 py-3.25 md:px-6 md:py-4 outline-none border-none rounded-md text-gray-100 active:scale-98 transition-all font-bold',
  },

  theme: {
    colors: {
      primary: {
        DEFAULT: '#FF6630',
        50: '#FFEEE8',
        100: '#FFDFD3',
        200: '#FFC0AA',
        300: '#FFA282',
        400: '#FF8459',
        500: '#FF6630',
        600: '#F74000',
        700: '#BF3200',
        800: '#872300',
        900: '#4F1500',
        950: '#330D00',
      },
      secondary: {
        DEFAULT: '#264653',
        50: '#72A8BE',
        100: '#64A0B8',
        200: '#4C8DA7',
        300: '#40758B',
        400: '#335E6F',
        500: '#264653',
        600: '#14262D',
        700: '#030506',
        800: '#000000',
        900: '#000000',
        950: '#000000',
      },
      tertiary: '#151030',
      'black-100': '#100d25',
      'black-200': '#090325',
      'white-100': '#f3f3f3',
    },
    boxShadow: {
      card: '0px 35px 120px -15px #211e35',
    },
    breakpoints: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
});
