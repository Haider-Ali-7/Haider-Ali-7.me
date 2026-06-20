---
name: debug-nextjs
description: Debug and fix issues in Next.js projects. Use whenever something isn't working as expected — broken functions, logic bugs, CSS conflicts, animation glitches, layout issues, hydration errors, or unexpected behavior. Triggers on phrases like "not working", "broken", "glitch", "bug", "wrong", "unexpected", "fix this", or any description of incorrect behavior in a Next.js/React codebase.
---

# Debug Next.js

A systematic debugger for Next.js projects that identifies root causes and applies targeted fixes.

## When to Use

- Functions or components not behaving as expected
- Business logic producing wrong results
- Design/layout not matching intent
- CSS conflicts (Tailwind, modules, or third-party libraries)
- Animation glitches or visual artifacts
- Hydration mismatches
- Build or runtime errors

## Debugging Strategy

Adapt the approach based on the issue category:

### 1. Understand the Issue

Before diving into code:
- What is the expected behavior?
- What is the actual behavior?
- When does it happen? (on load, on hover, on click, on specific routes)
- Is it reproducible consistently?

### 2. Categorize and Investigate

#### Logic & Function Bugs
1. Read the component/function where the issue manifests
2. Trace data flow: props → state → render
3. Check for:
   - Incorrect conditionals or comparisons
   - Missing dependencies in useEffect/useCallback
   - Stale closures capturing old values
   - Async race conditions
   - Off-by-one errors in loops/arrays

#### CSS & Layout Issues
1. Identify the element(s) involved
2. Check for:
   - Specificity conflicts (inspect computed styles)
   - Z-index stacking context issues
   - Flexbox/Grid misconfiguration
   - Overflow clipping content
   - Tailwind class conflicts or typos
   - Missing responsive breakpoints
3. For third-party library conflicts:
   - Check if library CSS is imported after your styles
   - Look for `!important` overrides
   - Consider CSS modules or scoped styles

#### Animation Glitches
1. Identify the animation library (framer-motion, CSS, GSAP, etc.)
2. Check for:
   - Conflicting transforms (multiple sources applying transforms)
   - GPU compositing issues (`transform-style`, `backface-visibility`, `will-change`)
   - Rapid state changes triggering re-renders mid-animation
   - Missing `key` props causing React to reuse wrong DOM nodes
   - Reduced motion preferences not handled
3. Common fixes:
   - Isolate transform contexts with `transform-style: flat`
   - Add `backface-visibility: hidden` for 3D transforms
   - Use `layoutId` properly in framer-motion
   - Debounce rapid state updates

#### Hydration Errors
1. Look for:
   - Browser-only APIs used during SSR (`window`, `document`, `localStorage`)
   - Date/time rendering that differs server vs client
   - Conditional rendering based on client state
   - Third-party scripts modifying DOM
2. Fixes:
   - Use `useEffect` for client-only logic
   - Add `suppressHydrationWarning` where appropriate
   - Use dynamic imports with `ssr: false`

#### Build & Runtime Errors
1. Read the full error message and stack trace
2. Check:
   - Import paths and module resolution
   - TypeScript type mismatches
   - Missing environment variables
   - Incompatible dependency versions

### 3. Apply the Fix

- Make the minimal change that fixes the issue
- Avoid introducing new patterns or abstractions
- Preserve existing code style
- If the fix reveals a deeper architectural issue, note it but fix the immediate problem first

### 4. Explain the Fix

After applying:
- State what the root cause was
- Explain why the fix works
- Note any related issues worth addressing later

## Debugging Tools

Use these as needed:

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for ESLint issues
npm run lint

# Search for patterns
grep -rn "pattern" src/

# Check dependency conflicts
npm ls <package-name>
```

For CSS debugging, mentally inspect:
- The element's computed styles
- Parent containers that might clip or transform
- Sibling elements that might overlap

## Common Next.js Gotchas

- **'use client' missing**: Components using hooks or browser APIs need the directive
- **Image component**: Requires width/height or fill, parent needs `position: relative` for fill
- **Link component**: In Next.js 13+, no need for `<a>` child
- **App Router vs Pages Router**: Different data fetching patterns
- **Server Components**: Can't use hooks, can't pass functions as props to client components
- **Metadata**: Must be in server components, not client components

## Output

After debugging:
1. Apply the fix to the relevant file(s)
2. Summarize: "Fixed [issue] in [file]. Root cause: [explanation]. The fix: [what changed]."
