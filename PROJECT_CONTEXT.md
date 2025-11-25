# TechBusiness Website

## Project Overview
A modern, professional website for TechBusiness - a technology solutions company targeting general consumers. The website showcases professional services and client testimonials with a clean, trustworthy design.

## Design Principles

### Color Palette
- **Primary**: Blue (#2563EB) - Trust, professionalism, technology
- **Secondary**: Slate/Gray - Modern, clean, professional
- **Accent**: Light Blue (#93C5FD) - Highlights and calls-to-action
- **Neutrals**: White, Gray shades - Clean backgrounds and text

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Sizes**: 
  - H1 (Hero): text-6xl to text-8xl
  - H2 (Sections): text-5xl to text-6xl
  - H3 (Cards): text-2xl to text-3xl
- **Body Text**: text-lg to text-xl for readability
- **Line Height**: Generous spacing with leading-relaxed

### Layout Strategy

#### Hero Section
- Full-screen hero with background image
- Gradient overlay for text readability
- Large, impactful headline
- Clear value proposition
- Single call-to-action button
- Smooth scroll indicator

#### Services Section
- 2x2 grid layout on desktop
- Icon + Title + Description cards
- Hover effects with scale and shadow
- Consistent spacing and padding
- Professional icons from Lucide React

#### Testimonials Section
- Carousel/slider layout (different from services grid)
- Full-width testimonial cards
- Client photos, names, roles, and companies
- 5-star ratings
- Navigation arrows and dots
- Gradient background cards

#### Pricing Section
- Single featured package
- Clear pricing display ($29)
- Comprehensive feature list
- Trust indicators (security, support, quick setup)
- Stripe payment integration
- Hover effects and visual feedback

#### Contact Form
- Split layout: Contact info + Form
- Gradient background for contact info card
- Clean, accessible form fields
- Form validation
- Success/error messaging
- Required hidden fields for tracking

### User Experience

#### Navigation
- Sticky header with scroll effect
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Clear visual hierarchy
- Color transition on scroll

#### Interactions
- Smooth transitions (duration-300)
- Hover effects on all interactive elements
- Scale transforms on cards
- Shadow enhancements on hover
- Loading states for form submission

#### Responsiveness
- Mobile-first approach
- Breakpoints: sm, md, lg
- Flexible grid layouts
- Responsive typography
- Touch-friendly mobile menu

## Technical Implementation

### Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Unsplash

### Key Features

1. **Server-Side Rendering**
   - Fast initial page load
   - SEO optimization
   - Metadata configuration

2. **Form Handling**
   - POST to external API
   - Hidden tracking fields (founder_id, project_id)
   - Client-side validation
   - Status feedback

3. **Payment Integration**
   - Stripe test link
   - Clear pricing display
   - Trust indicators

4. **Performance**
   - Optimized images from Unsplash
   - Lazy loading
   - Smooth animations
   - Efficient re-renders

### Component Structure

```
app/
├── page.tsx (Main page composition)
├── layout.tsx (Root layout with metadata)
└── globals.css (Global styles)

components/
├── Navigation.tsx (Sticky header)
├── Hero.tsx (Full-screen hero)
├── Services.tsx (Services grid)
├── Testimonials.tsx (Testimonials carousel)
├── Pricing.tsx (Pricing section)
├── ContactForm.tsx (Contact form)
└── Footer.tsx (Footer with links)
```

### Configuration Files

- **tailwind.config.js**: Tailwind customization
- **tsconfig.json**: TypeScript configuration
- **next.config.js**: Next.js configuration (image domains)
- **postcss.config.js**: PostCSS plugins
- **package.json**: Dependencies and scripts

## Content Strategy

### Services Offered
1. Custom Software Development
2. Cloud Infrastructure
3. Cybersecurity Solutions
4. Digital Transformation

### Testimonials
- 6 client testimonials
- Mix of roles (CEO, CTO, Director, Founder, VP, Managing Director)
- Diverse companies and use cases
- Focus on results and partnership

### Pricing
- Single package: $29/month
- 8 included features
- 3 trust indicators
- Clear call-to-action

## Brand Voice

- **Professional**: Expert, knowledgeable, trustworthy
- **Modern**: Cutting-edge, innovative, forward-thinking
- **Approachable**: Friendly, helpful, partnership-focused
- **Results-Oriented**: Focus on business outcomes and transformation

## Success Metrics

- Clear value proposition immediately visible
- Easy navigation to all sections
- Multiple conversion points (pricing CTA, contact form)
- Mobile-friendly experience
- Fast load times
- Professional, trustworthy appearance

## Future Enhancements

- Blog section for thought leadership
- Case studies page
- Team member profiles
- Resource downloads
- Live chat integration
- Video testimonials
- Interactive demos