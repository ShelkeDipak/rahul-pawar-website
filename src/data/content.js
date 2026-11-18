// All site content lives here, copied from the original Canva design.

export const PHONE_DISPLAY = '9518331661'
export const PHONE_E164 = '+919518331661'
export const INSTAGRAM_HANDLE = 'edits_r_r_pawar_09'

export const links = {
  tel: `tel:${PHONE_E164}`,
  whatsapp: `https://wa.me/${PHONE_E164.replace('+', '')}`,
  instagram: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`,
}

export const navItems = [
  { label: 'मुख्यपृष्ठ', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'गॅलरी', href: '#gallery' },
  { label: 'संपर्क', href: '#contact' },
]

export const hero = {
  greeting: 'नमस्ते, मी राहुल पवार',
  tagline: 'तुमच्या आठवणींना देतो एक सुंदर रूप!',
  intro:
    'वाढदिवस, वास्तुशांती, प्रमोशनल व्हिडिओ आणि खास सेलिब्रेशनचे क्षण आकर्षक एडिटिंगद्वारे कायमस्वरूपी आठवणीत जपण्याचा माझा प्रयत्न असतो.',
  role: 'Social Media & Cinematic Video Creator',
}

export const services = [
  'Business Promotion',
  'Baby Welcome Reels',
  'Naamkaran Sohala Reels',
  'Lagn Entry Reels',
  'Pre-Wedding Engagement',
  'Reels Business Advertising',
  'Business Opening Reels',
  'Home Opening Reels',
  'Girls Cinematic Reels',
  'All Wedding Reels',
  'Ganpati Aagman',
  'Baby Birthday',
  'Political Reels',
  'New Car Reels',
  'Gavdev Reel',
]

export const gallery = {
  heading: 'अविस्मरणीय सोहळे...',
  items: [
    { src: '/images/gallery-1.jpg', label: 'सेलिब्रेशन', alt: 'सेलिब्रेशन – राहुल पवार' },
    { src: '/images/gallery-2.jpg', label: 'वास्तुशांती', alt: 'वास्तुशांती – राहुल पवार' },
    { src: '/images/gallery-3.jpg', label: 'वाढदिवस', alt: 'वाढदिवस – राहुल पवार' },
    { src: '/images/gallery-4.jpg', label: '', alt: 'सोहळ्याचा क्षण' },
    { src: '/images/gallery-5.jpg', label: '', alt: 'सोहळ्याचा क्षण' },
    { src: '/images/gallery-6.jpg', label: '', alt: 'सोहळ्याचा क्षण' },
  ],
}

// Text kept exactly as written in the Canva design.
export const quote =
  'वेळ निधूल जाईल, दिवस सरुन जातील... पण तुमच्या आठवणी कायम जिवंत राहतील!'
