const fs = require('fs');
const path = require('path');

// List of files to update with icon aria-hidden fixes
const filesToFix = [
  {
    path: 'src/app/about/page.tsx',
    replacements: [
      { from: '<Users className="w-24 h-24 mx-auto mb-4 text-primary/30" />', to: '<Users className="w-24 h-24 mx-auto mb-4 text-primary/30" aria-hidden="true" />' },
      { from: '<Award className="w-6 h-6 text-accent" />', to: '<Award className="w-6 h-6 text-accent" aria-hidden="true" />' },
      { from: '<value.icon className="w-7 h-7 text-white" />', to: '<value.icon className="w-7 h-7 text-white" aria-hidden="true" />' },
      { from: '<Users className="w-20 h-20 mx-auto text-primary/20" />', to: '<Users className="w-20 h-20 mx-auto text-primary/20" aria-hidden="true" />' },
      { from: '<ShieldCheck className="w-12 h-12 text-primary" />', to: '<ShieldCheck className="w-12 h-12 text-primary" aria-hidden="true" />' },
      { from: '<Phone className="w-5 h-5" />', to: '<Phone className="w-5 h-5" aria-hidden="true" />' },
    ]
  },
  {
    path: 'src/app/contact/page.tsx',
    replacements: [
      { from: '<Phone className="w-5 h-5 text-primary" />', to: '<Phone className="w-5 h-5 text-primary" aria-hidden="true" />' },
      { from: '<Mail className="w-5 h-5 text-primary" />', to: '<Mail className="w-5 h-5 text-primary" aria-hidden="true" />' },
      { from: '<MapPin className="w-5 h-5 text-primary" />', to: '<MapPin className="w-5 h-5 text-primary" aria-hidden="true" />' },
      { from: '<Clock className="w-5 h-5 text-primary" />', to: '<Clock className="w-5 h-5 text-primary" aria-hidden="true" />' },
      { from: '<MapPin className="w-8 h-8 text-primary" />', to: '<MapPin className="w-8 h-8 text-primary" aria-hidden="true" />' },
      { from: '<Siren className="w-6 h-6 text-white" />', to: '<Siren className="w-6 h-6 text-white" aria-hidden="true" />' },
      { from: '<Icon className="w-6 h-6 text-teal" />', to: '<Icon className="w-6 h-6 text-teal" aria-hidden="true" />' },
    ]
  },
  {
    path: 'src/app/services/page.tsx',
    replacements: [
      { from: '<CheckCircle className="w-5 h-5 text-accent" />', to: '<CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />' },
      { from: '<IconComponent className="w-8 h-8 text-accent" />', to: '<IconComponent className="w-8 h-8 text-accent" aria-hidden="true" />' },
      { from: '<IconComponent className="w-7 h-7 text-teal" />', to: '<IconComponent className="w-7 h-7 text-teal" aria-hidden="true" />' },
      { from: '<ArrowRight className="w-5 h-5" />', to: '<ArrowRight className="w-5 h-5" aria-hidden="true" />' },
      { from: '<Phone className="w-5 h-5" />', to: '<Phone className="w-5 h-5" aria-hidden="true" />' },
    ]
  },
  {
    path: 'src/app/reviews/page.tsx',
    replacements: [
      { from: 'className="w-6 h-6 fill-amber-400 text-amber-400"', to: 'className="w-6 h-6 fill-amber-400 text-amber-400" aria-hidden="true"' },
      { from: 'className="w-5 h-5 fill-amber-400 text-amber-400"', to: 'className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true"' },
      { from: '<ShieldCheck className="w-6 h-6 text-teal" />', to: '<ShieldCheck className="w-6 h-6 text-teal" aria-hidden="true" />' },
      { from: '<Star className="w-5 h-5" />', to: '<Star className="w-5 h-5" aria-hidden="true" />' },
      { from: '<ExternalLink className="w-4 h-4" />', to: '<ExternalLink className="w-4 h-4" aria-hidden="true" />' },
    ]
  },
  {
    path: 'src/app/blog/page.tsx',
    replacements: [
      { from: '<Calendar className="w-4 h-4" />', to: '<Calendar className="w-4 h-4" aria-hidden="true" />' },
      { from: '<Clock className="w-4 h-4" />', to: '<Clock className="w-4 h-4" aria-hidden="true" />' },
      { from: '<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />', to: '<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />' },
    ]
  },
  {
    path: 'src/app/gallery/page.tsx',
    replacements: [
      { from: '<Icon className="w-10 h-10 text-accent" />', to: '<Icon className="w-10 h-10 text-accent" aria-hidden="true" />' },
      { from: '<Phone className="w-5 h-5" />', to: '<Phone className="w-5 h-5" aria-hidden="true" />' },
    ]
  },
];

console.log('Starting accessibility fixes...\n');

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file.path);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changesMade = 0;

    file.replacements.forEach(replacement => {
      const occurrences = (content.match(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      if (occurrences > 0) {
        content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
        changesMade += occurrences;
      }
    });

    if (changesMade > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed ${changesMade} icons in ${file.path}`);
    } else {
      console.log(`  No changes needed in ${file.path}`);
    }
  } else {
    console.log(`✗ File not found: ${file.path}`);
  }
});

console.log('\nAccessibility fixes complete!');
