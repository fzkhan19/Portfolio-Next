# Portfolio Website Setup Guide

This guide will help you set up and customize your own portfolio website, even if you're not familiar with programming. Follow these steps carefully.

## Step 1: Setting Up Your Computer

### Install Required Software

1. **GitHub Desktop**
   - Go to https://desktop.github.com/
   - Download and install GitHub Desktop for your operating system
   - Create a GitHub account at https://github.com/signup if you don't have one
   - Open GitHub Desktop and sign in with your account

2. **Node.js**
   - Visit https://nodejs.org/
   - Download and install the "LTS" (Long Term Support) version
   - Follow the installation wizard's default settings

3. **Bun**
   - Open Terminal (Mac/Linux) or Command Prompt (Windows)
   - Copy and paste this command:
     
     curl -fsSL https://bun.sh/install | bash
     
   - For Windows, follow the Windows-specific instructions at https://bun.sh/docs/installation

## Step 2: Getting the Website Files

1. **Fork the Repository**
   - Go to [original-repository-url]
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the website

2. **Clone to Your Computer**
   - Open GitHub Desktop
   - Click "File" → "Clone Repository"
   - Select your forked repository
   - Choose where to save it on your computer
   - Click "Clone"

## Step 3: Setting Up the Project

1. **Open Terminal/Command Prompt**
   - Navigate to your project folder:
     
     cd path/to/your/portfolio-next
     

2. **Install Dependencies**
   - Run this command:
     
     bun install
     
   - Wait for installation to complete

## Step 4: Customizing Your Portfolio

### Update Your Information

1. **Personal Details**
   - Navigate to `src/lib/siteMetaData.ts`
   - Open in any text editor (Notepad, TextEdit)
   - Update:
     - title (your name or website name)
     - author (your name)
     - description (about your website)
     - email (your contact email)
     - social media links

2. **Resume Information**
   - Go to `src/constants/resume.tsx`
   - Update:
     - name
     - location
     - description (your bio)
     - work experience
     - education
     - skills
     - projects

3. **Profile Picture**
   - Add your photo to the `public` folder
   - Update the image path in `src/constants/resume.tsx`

## Step 5: Preview Your Website

1. **Run Locally**
   - In Terminal/Command Prompt, run:
     
     bun dev
     
   - Open your web browser
   - Visit: http://localhost:3000

## Step 6: Publishing Your Changes

1. **Save Changes (GitHub Desktop)**
   - Open GitHub Desktop
   - You'll see your changes listed
   - Add a summary (e.g., "Updated personal information")
   - Click "Commit to main"
   - Click "Push origin"

## Step 7: Deploy Your Website

1. **Setup Vercel**
   - Go to https://vercel.com/
   - Sign up using your GitHub account
   - Click "New Project"
   - Select your portfolio repository
   - Click "Deploy"

2. **Your Website is Live!**
   - Vercel will provide you with a URL
   - You can add a custom domain in Vercel's settings

## Making Future Updates

1. **Edit Files**
   - Make changes to your files
   - Preview locally with `bun dev`

2. **Publish Updates**
   - Open GitHub Desktop
   - Commit your changes
   - Push to GitHub
   - Vercel will automatically update your site

## Need Help?

- Email: faizpathan1717@gmail.com
- Phone: +917802844364
- For general questions: Create an issue in the GitHub repository

Remember to regularly backup your changes and test your website locally before pushing updates live.