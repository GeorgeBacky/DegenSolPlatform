// src\constants.ts
import { PublicKey } from "@solana/web3.js";

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          PLATFORM FEES               │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05; // 5% !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.01; // 0.1%

// Referral fee (in %)
export const PLATFORM_REFERRAL_FEE = 0.0025; // 0.25%

// Toggle live toast events - (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const FOOTER_LINKS = [
  {
    href: "https://github.com/BankkRoll/magicnumber-V2-Next.js",
    title: "👨‍💻 Build your own",
  },
  {
    href: "https://explorer.magicnumber.so/create",
    title: "🚀 Create Pool",
  },
  {
    href: "https://magicnumber.so/docs",
    title: "📖 magicnumber Docs",
  },
  {
    href: "https://discord.com/invite/HSTtFFwR",
    title: "💬 Join Discord",
  },
];

export const FOOTER_TWITTER_LINK = {
  href: "https://x.com/MagicNumber_Co",
  title: "© 2024 Magic Number Games",
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const BASE_SEO_CONFIG = {
  defaultTitle: "MagicNumber Games - DEMO",
  description:
    "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://play-magicnumber.vercel.app/",
    title: "MagicNumber Games - DEMO",
    description:
      "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
    images: [
      {
        url: "https://play-magicnumber.vercel.app/seo.png",
        alt: "MagicNumber Games - DEMO",
      },
    ],
    site_name: "MagicNumber Games - DEMO",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://x.com/MagicNumber_Co",
    handle: "@MagicNumber_Co",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "casino, gaming, rewards, gambling, entertainment",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
};

/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/

export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // GUAC
  {
    mint: new PublicKey("EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"),
    name: "dogwifhat",
    symbol: "$WIF",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm.png?size=xl&key=c97d2c",
    decimals: 5,
    baseWager: 100e5,
  },

  // Add New Public pool
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },

  // Add New Private pool
  // {
  //   mint: new PublicKey(""),
  //   poolAuthority: new PublicKey(""), // REQUIRED FOR PRIVATE POOLS ONLY
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
