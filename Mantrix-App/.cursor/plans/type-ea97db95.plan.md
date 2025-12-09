---
name: Plan
overview: ""
todos:
  - id: f6198884-80ad-4692-9d72-693d0bbe6d28
    content: Ensure typeUser & selectors saved/recomputed
    status: pending
  - id: fcc7c3e8-34d5-4027-b2ca-76f968111a7c
    content: Add type-specific rules to CAT & career prompts
    status: pending
  - id: dcd1840a-ca8f-4314-b99a-1b2ba4bcb863
    content: Update Explore cards and navigation per type
    status: pending
  - id: 85e20a34-efa8-4ccd-afff-2c1efdc8f669
    content: Implement AI Roadmap screen & hook up
    status: pending
  - id: 8cd645e1-1b4e-4313-a0cc-933a3453dce1
    content: Add college prediction service/screen for 12th
    status: pending
  - id: 7eb3fb43-38de-470b-a475-4028caba4d63
    content: Adjust career prediction outputs for 10th/college
    status: pending
  - id: 2eeaa3d1-de1f-4549-956d-1d3bec85961e
    content: Test flows for each type user
    status: pending
---

# Plan

1. **Expand Type Detection & Storage**  

- Enhance `catAssessmentService.markCATAssessmentCompleted` (already partially updated) to ensure `typeUser` is reliably derived from onboarding answers and saved.  
- Backfill detection on load (e.g., helper in `dbService` or new util) so we can compute `typeUser` from onboarding data if missing, to avoid null state for existing users.

2. **Inject Type Context into Prompts**  

- Update CAT prompt in `catAssessmentService.ts` to emphasize audience-specific instructions and include `typeUser`/selector fields when present.  
- Modify `CAREER_PREDICTION_PROMPT` assembly in `careerPredictionService.ts` to add type-based rules (college vs 12th vs 10th), including highlighting new required selectors (degree/stream/interest) if available, and explicitly mention future horizons emphasis.

3. **Persist New Selector Fields**  

- In CAT completion flow (`markCATAssessmentCompleted`), parse answers to extract `degreeSelector` (college), `streamSelector` (12th), `interestSelector` (10th) and store them in Firestore (`user-data`).  
- Ensure Assessment UI (`AssessmentScreen.tsx`) captures these answers (likely via specific question IDs) so they can be parsed reliably.

4. **Type-Aware UI Routing & Cards**  

- In `ExploreScreen.tsx` (and any dashboard components), read `typeUser` from user data and adjust card copy:  
- College (`col`): highlight CAT card as college-focused, rename/create “Career Prediction” rules, show AI Roadmap, keep Mentor Connect disabled.  
- 12th: rename cards to “College Prediction”, etc., referencing stream selector requirement.  
- 10th: emphasize stream selection + interactive roadmap.  
- Ensure card press handlers route to correct screens (existing ones or placeholders) without breaking other roles.

5. **AI Roadmap Feature**  

- Create new `AIRoadmapScreen.tsx` (or reuse a component) with highly visual roadmap sections tailored per `typeUser` (college: career steps; 12th: sector > specialization; 10th: stream > track).  
- Hook screen into navigation (`app/index.tsx`) and `ExploreScreen` card button.  
- Use existing design tokens (NativeWind classes) to match current UI; support interactive elements (accordions/stepper) but keep logic simple (local state, no backend yet).

6. **College Prediction Backend Stub**  

- Introduce a dummy colleges JSON (e.g., `data/colleges.json`) with fields name, degrees, mentorRating.  
- Add new service (e.g., `services/collegePredictionService.ts`) that loads JSON, filters by stream selector, and returns recommendations for 12th students; integrate with new screen triggered from Explore.  
- For 10th/college predictions, reuse existing career prediction service but supply type-specific prompts/data slices (via helper that injects different rule text).

7. **UI Screens for New Predictions**  

- Add/modify screens for College Prediction (12th) and Stream Prediction (10th) using existing `CareerPathResultsScreen` patterns (cards, gradients) but tailored content (sections for degrees/colleges or stream options).  
- Ensure these screens read the correct data from `user-data` (extend `saveUserData` to persist new predictions).

8. **Testing & Validation**  

- Manually test flows for each `typeUser` by mocking user data (if needed) or adjusting state to ensure:  
- Selectors stored correctly.  
- Prompts log type-specific instructions.  
- Explore cards change text/behavior per user type.  
- New AI Roadmap and College Prediction screens render without errors.