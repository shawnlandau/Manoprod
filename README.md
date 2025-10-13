# Mono Suave Baseball - Booking Website

A professional baseball lesson booking website with integrated Calendly scheduling, Google Calendar sync, and automatic notifications.

## 🎯 Project Overview

This website provides a streamlined booking experience for baseball lessons with:
- **30-minute sessions**: $50
- **1-hour sessions**: $100

## ✅ Currently Completed Features

- ✅ **Responsive Landing Page** - Professional design inspired by monosuavebaseball.com
- ✅ **Hero Section** - Eye-catching introduction with call-to-action
- ✅ **About Section** - Training focus and service description
- ✅ **Pricing Section** - Clear pricing cards for both lesson options
- ✅ **Calendly Integration** - Embedded booking widget (requires setup)
- ✅ **Mobile Responsive** - Optimized for all screen sizes
- ✅ **Smooth Navigation** - Scroll animations and active link highlighting
- ✅ **Contact Section** - Contact information and social media links

## 🔧 Setup Instructions

### Step 1: Create Your Calendly Account

1. Go to [Calendly.com](https://calendly.com) and sign up for a free account
2. Connect your Google Calendar to Calendly
3. Create two event types:
   - **30 Minute Lesson** - Set duration to 30 minutes, price $50
   - **1 Hour Lesson** - Set duration to 60 minutes, price $100

### Step 2: Configure Calendly Settings

1. In Calendly, go to your event type settings
2. Enable **Collect Payment** if you want to charge upfront (requires Stripe/PayPal)
3. Set your availability schedule
4. Configure email notifications for yourself and clients
5. Customize confirmation page and email templates

### Step 3: Update Your Website

1. Get your Calendly scheduling page URL (looks like: `https://calendly.com/your-username`)
2. Open `index.html` in a text editor
3. Find this line (around line 155):
   ```html
   data-url="https://calendly.com/YOUR_CALENDLY_USERNAME?hide_gdpr_banner=1"
   ```
4. Replace `YOUR_CALENDLY_USERNAME` with your actual Calendly username
5. Save the file

### Step 4: Customize Your Website

#### Update Contact Information
In `index.html`, update the contact section (around line 183):
```html
<p><i class="fas fa-envelope"></i> <a href="mailto:info@monosuavebaseball.com">your-email@example.com</a></p>
<p><i class="fas fa-phone"></i> <a href="tel:+1234567890">Your Phone Number</a></p>
```

#### Add Social Media Links
Update the social media links (around line 186):
```html
<a href="YOUR_FACEBOOK_URL" class="social-link"><i class="fab fa-facebook"></i></a>
<a href="YOUR_INSTAGRAM_URL" class="social-link"><i class="fab fa-instagram"></i></a>
<a href="YOUR_TWITTER_URL" class="social-link"><i class="fab fa-twitter"></i></a>
```

#### Replace Logo (Optional)
- Replace `images/logo.png` with your actual logo
- Recommended size: 200x200px (PNG with transparent background)

### Step 5: Deploy to Netlify

1. **Create a Netlify Account**
   - Go to [Netlify.com](https://netlify.com)
   - Sign up for a free account

2. **Deploy Your Site**
   - Use the **Publish tab** in this editor to deploy, OR
   - Drag and drop your project folder to Netlify's deploy area
   - Your site will be live in seconds!

3. **Connect a Custom Domain** (Optional)
   - In Netlify dashboard, go to Site Settings > Domain Management
   - Add your custom domain (e.g., monosuavebaseball.com)
   - Follow DNS configuration instructions

## 📁 Project Structure

```
mono-suave-baseball/
├── index.html           # Main HTML file
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── main.js         # Interactive features and animations
├── images/
│   └── logo.png        # Website logo (replace with yours)
└── README.md           # This file
```

## 🚀 Features & Entry Points

### Main Pages/Sections

1. **Home** (`/#home`)
   - Hero section with main call-to-action
   - Introduces the training services

2. **About** (`/#about`)
   - Training focus areas
   - Service description

3. **Pricing** (`/#pricing`)
   - 30-minute lesson: $50
   - 1-hour lesson: $100
   - Feature comparisons

4. **Booking** (`/#booking`)
   - Embedded Calendly scheduler
   - Auto-syncs with Google Calendar
   - Sends automatic confirmations

5. **Contact** (`/#contact`)
   - Email and phone information
   - Social media links

## 🎨 Design Features

- **Color Scheme**: Red (#c41e3a) and Black (#1a1a1a) - professional baseball aesthetic
- **Typography**: Montserrat (headings) and Open Sans (body text)
- **Icons**: Font Awesome for professional iconography
- **Responsive**: Mobile-first design, works on all devices

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔔 How Notifications Work

When a client books a lesson through Calendly:

1. **Client receives**:
   - Instant email confirmation
   - Calendar invite (.ics file)
   - Reminder emails (configurable in Calendly)

2. **You receive**:
   - Email notification of new booking
   - Calendar event added to your Google Calendar
   - SMS notification (if enabled in Calendly Pro)

## 💡 Recommended Next Steps

1. ✅ **Set up Calendly account** and configure event types
2. ✅ **Update website** with your Calendly URL
3. ✅ **Customize contact information** and social links
4. ✅ **Replace logo** with your actual branding
5. ⏳ **Add testimonials section** for social proof
6. ⏳ **Add photo gallery** of training sessions
7. ⏳ **Add video introduction** or training highlights
8. ⏳ **Set up Google Analytics** to track bookings
9. ⏳ **Add FAQ section** for common questions
10. ⏳ **Create blog section** for training tips

## 🛠️ Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Interactive features
- **Calendly API** - Booking and scheduling
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📞 Support & Customization

If you need help with:
- Calendly setup
- Custom design changes
- Additional features
- Technical support

Feel free to refer to:
- [Calendly Help Center](https://help.calendly.com/)
- [Netlify Documentation](https://docs.netlify.com/)

## 📝 Notes

- The website is fully static (no backend required)
- All scheduling logic is handled by Calendly
- Google Calendar integration is managed through Calendly
- Email notifications are sent automatically by Calendly
- Payment processing (optional) can be enabled through Calendly + Stripe/PayPal

## 🎯 Quick Start Checklist

- [ ] Sign up for Calendly account
- [ ] Connect Google Calendar to Calendly
- [ ] Create 30-min and 1-hour event types
- [ ] Copy your Calendly URL
- [ ] Update `index.html` with your Calendly URL
- [ ] Update contact information
- [ ] Replace logo image
- [ ] Test booking flow
- [ ] Deploy to Netlify
- [ ] Share your booking link!

---

**Ready to Deploy?** Use the **Publish tab** to make your website live, or upload to Netlify manually.

**Need Your Logo?** Replace `images/logo.png` with your actual logo for a custom branded experience.
