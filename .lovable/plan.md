

## Plan: Scroll to top on page navigation

When navigating between pages, React Router preserves the scroll position. This causes service detail pages to open mid-page instead of at the top.

### Solution

1. **Create `src/components/ScrollToTop.tsx`** — a component that scrolls to top on every route change (except browser back/forward).

2. **Update `src/App.tsx`** — place `<ScrollToTop />` inside `<BrowserRouter>` before `<Routes>`.

This fixes the issue globally for all page transitions, not just service pages.

