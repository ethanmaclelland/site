# Ethan MacLelland - Personal Website

A professional portfolio website showcasing engineering expertise, real estate development projects, and entrepreneurial journey. Built with modern web technologies and features an easy content management system.

## 🚀 Quick Start

1. **Fork or download this repository**
2. **Upload to GitHub Pages or your hosting platform**  
3. **Edit `content.js` to customize all text content**
4. **Upload your project images following the folder structure below**
5. **Your website is live!**

## 📁 File Structure

```
your-repo/
├── index.html                 # Main website file (rarely needs editing)
├── content.js                 # Easy content editor (edit this for all text changes)
├── README.md                  # This documentation file
├── docs/
│   └── ethan-maclelland-resume.pdf    # Your resume PDF
└── images/
    └── portfolio/
        ├── vinton/            # The Vinton project photos (10 images)
        │   ├── exterior-before-1.jpg
        │   ├── exterior-after-1.jpg
        │   ├── kitchen-before-1.jpg
        │   ├── kitchen-after-1.jpg
        │   ├── living-before-1.jpg
        │   ├── living-after-1.jpg
        │   ├── bedroom-before-1.jpg
        │   ├── bedroom-after-1.jpg
        │   ├── bathroom-before-1.jpg
        │   └── bathroom-after-1.jpg
        ├── church/            # 887 Stafford Road project (8 images)
        │   ├── exterior-before-1.jpg
        │   ├── exterior-after-1.jpg
        │   ├── interior-before-1.jpg
        │   ├── interior-after-1.jpg
        │   ├── sanctuary-before-1.jpg
        │   ├── sanctuary-after-1.jpg
        │   ├── basement-before-1.jpg
        │   └── basement-after-1.jpg
        ├── trap/              # The Trap project photos (10 images)
        │   ├── exterior-before-1.jpg
        │   ├── exterior-after-1.jpg
        │   ├── kitchen-before-1.jpg
        │   ├── kitchen-after-1.jpg
        │   ├── living-before-1.jpg
        │   ├── living-after-1.jpg
        │   ├── bathroom-before-1.jpg
        │   ├── bathroom-after-1.jpg
        │   ├── basement-before-1.jpg
        │   └── basement-after-1.jpg
        ├── poolhouse/         # Pool House project photos (12 images)
        │   ├── exterior-before-1.jpg
        │   ├── exterior-after-1.jpg
        │   ├── pool-before-1.jpg
        │   ├── pool-after-1.jpg
        │   ├── kitchen-before-1.jpg
        │   ├── kitchen-after-1.jpg
        │   ├── living-before-1.jpg
        │   ├── living-after-1.jpg
        │   ├── master-before-1.jpg
        │   ├── master-after-1.jpg
        │   ├── landscape-before-1.jpg
        │   └── landscape-after-1.jpg
        └── mbta/              # MBTA engineering projects (6 images)
            ├── orange-line-1.jpg
            ├── orange-line-2.jpg
            ├── green-line-1.jpg
            ├── green-line-2.jpg
            ├── field-work-1.jpg
            └── team-work-1.jpg
```

## ✏️ Easy Content Editing

**All website text is stored in `content.js` for easy editing!**

### To Change Any Text:

1. **Open `content.js` in GitHub**
2. **Click the pencil icon (✏️) to edit**
3. **Find the section you want to change**
4. **Edit the text between the quotes**
5. **Click "Commit changes"**
6. **Your website updates automatically!**

### Content Sections You Can Edit:

#### Hero Section (Homepage Banner)
```javascript
hero: {
    name: "Your Name Here",
    subtitle: "Your Title Here", 
    description: "Your description here...",
    stats: {
        properties: {number: "5+", label: "Properties Renovated"},
        // Update your stats here
    }
}
```

#### About Section
```javascript
about: {
    paragraphs: [
        "First paragraph of your story...",
        "Second paragraph...",
        "Add more paragraphs as needed..."
    ]
}
```

#### Portfolio Projects
```javascript
portfolio: {
    vinton: {
        title: "Project Title",
        date: "2019 - Present",
        description: "Project description...",
        tags: ["Tag1", "Tag2", "Tag3"]
    }
    // Edit each project individually
}
```

## 📸 Image Management

### Image Requirements:
- **Format**: JPG or PNG
- **Size**: Maximum 2MB per image, 1200px wide recommended
- **Naming**: Must match exactly (case-sensitive, no spaces)

### Before/After Projects (Vinton, Church, Trap, Pool House):
- Each room needs 2 images: `room-before-1.jpg` and `room-after-1.jpg`
- Before images show the original condition
- After images show the completed renovation

### MBTA Project (Carousel):
- Single images showing different aspects of the engineering work
- Name them descriptively: `orange-line-1.jpg`, `field-work-1.jpg`, etc.

### How to Upload Images:

#### Method 1: GitHub Web Interface
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Rename files to include full path: `images/portfolio/vinton/kitchen-before-1.jpg`
4. Upload all files at once
5. GitHub creates folders automatically

#### Method 2: GitHub Desktop
1. Clone repository to your computer
2. Create folder structure locally
3. Add images to appropriate folders
4. Commit and push changes

## 🎨 Website Features

### Interactive Portfolio Galleries
- **Before/After Sliders**: Drag to compare transformations
- **Thumbnail Navigation**: Click to switch between rooms
- **Mobile Optimized**: Touch and swipe controls
- **Responsive Design**: Works on all devices

### Professional Sections
- **Hero**: Introduction with stats
- **About**: Personal story and background  
- **Expertise**: Skills and services
- **Portfolio**: Project showcases with galleries
- **Experience**: Professional timeline
- **Resume**: Downloadable PDF with highlights
- **Contact**: Professional contact form

### Technical Features
- **Mobile-First Design**: Optimized for all devices
- **Fast Loading**: Compressed images and efficient code
- **SEO Optimized**: Proper meta tags and structure
- **Modern UI/UX**: Professional animations and interactions

## 🔧 Customization

### Adding New Projects

1. **Add project data to `content.js`:**
```javascript
newproject: {
    title: "New Project Name",
    date: "2025 - Present",
    description: "Project description...",
    tags: ["Tag1", "Tag2"],
    galleryButton: "📸 View Gallery"
}
```

2. **Add to gallery data in `index.html`:**
```javascript
newproject: {
    title: "New Project Gallery",
    type: "before-after", // or "carousel"
    images: [
        {
            before: "images/portfolio/newproject/room-before-1.jpg",
            after: "images/portfolio/newproject/room-after-1.jpg",
            caption: "Room Description"
        }
    ]
}
```

3. **Create image folder**: `images/portfolio/newproject/`
4. **Upload images following naming convention**

### Updating Stats
```javascript
stats: {
    properties: {number: "7+", label: "Properties Renovated"},
    vacancy: {number: "0%", label: "Vacancy Rate"}, 
    projects: {number: "$3M+", label: "Projects Managed"}
}
```

### Changing Colors/Styling
- Main colors are defined in CSS variables in `index.html`
- Primary color: `#3498db` (blue)
- Secondary color: `#2c3e50` (dark blue)
- Edit the CSS section to customize appearance

## 🌐 Deployment

### GitHub Pages (Free)
1. Go to repository Settings
2. Scroll to "Pages" section  
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)
1. Add `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📱 Mobile Optimization

The website is fully responsive and includes:
- **Touch-friendly navigation** with hamburger menu
- **Swipe gestures** for image galleries
- **Optimized layouts** for all screen sizes
- **Fast loading** on mobile networks
- **Proper touch targets** (44px minimum)

## 🔍 SEO Features

- **Semantic HTML** structure
- **Meta tags** for social media sharing
- **Alt text** for all images
- **Fast loading** times
- **Mobile-friendly** design
- **Structured content** for search engines

## 🆘 Troubleshooting

### Images Not Loading
- ✅ Check file names match exactly (case-sensitive)
- ✅ Verify folder structure is correct
- ✅ Ensure images are under 25MB (GitHub limit)
- ✅ Use JPG or PNG format

### Content Not Updating
- ✅ Check `content.js` syntax (quotes, commas, brackets)
- ✅ Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- ✅ Wait a few minutes for GitHub Pages to update

### Gallery Not Working
- ✅ Verify image paths in gallery data section
- ✅ Check that `openGallery('projectname')` matches gallery data keys
- ✅ Ensure JavaScript console shows no errors

### Mobile Issues
- ✅ Test on actual devices, not just browser resize
- ✅ Check that touch events work properly
- ✅ Verify hamburger menu opens/closes correctly

## 📞 Support

### Common Questions

**Q: How do I change my name on the website?**
A: Edit the `name` field in the `hero` section of `content.js`

**Q: How do I add more rooms to a project gallery?**
A: Add more image objects to the project's `images` array in the gallery data

**Q: Can I change the color scheme?**
A: Yes, edit the CSS color variables in the `index.html` file

**Q: How do I update my resume?**
A: Replace the `ethan-maclelland-resume.pdf` file in the `docs/` folder

### Getting Help
- Check this README first
- Review the `content.js` file structure
- Test changes on a small scale first
- Use GitHub's version history to revert problematic changes

## 📄 License

This website template is created for Ethan MacLelland. Feel free to use as inspiration for your own projects.

---

**Built with ❤️ using modern web technologies**

- HTML5, CSS3, JavaScript
- Responsive Design
- Progressive Enhancement  
- Performance Optimized