# Video Creation Form Implementation Plan

## Goal
Implement a multi-step wizard for generating AI videos. The form collects user inputs across 6 steps and submits a unified payload.

## Completed Features
### Step 1: Niche Selection
- **Features**: 6 predefined niches with icons + Custom input.
- **State**: Persisted in `formData.niche`.

### Step 2: Topic & Language
- **Features**: Detailed topic textarea + Language dropdown.
- **State**: Persisted in `formData.topic` and `formData.language`.

### Infrastructure
- **State Management**: Unified `createPage` state (`VideoCreationData`).
- **Navigation**: "Next" (validated) and "Back" buttons.
- **Stepper**: Visual progress indicator.

## Upcoming Steps

### Step 3: Video Style
**Goal**: Select the visual style of the video (e.g., Realistic, Cartoon, Cinematic).
- **UI**: Grid of image cards representing styles.
- **Data**: `style: string`.

### Step 4: Duration & Ratio
**Goal**: Choose video length and aspect ratio.
- **UI**:
    - Duration: Slider or Button Group (30s, 60s, 90s).
    - Ratio: Toggle (9:16 Vertical, 16:9 Horizontal).
- **Data**: `duration: number`, `aspectRatio: string`.

### Step 5: Background Music
**Goal**: Select mood or specific track.
- **UI**: List of moods (Happy, Sad, Epic) or "No Music" option.
- **Data**: `musicMood: string`.

### Step 6: Review & Generate
**Goal**: Summary screen and final submission.
- **UI**: Read-only view of all selections.
- **Action**: "Generate Video" button triggering API call.

## Tech Stack
- **State**: React `useState` (Unified Object).
- **Validation**: Step-level checks before enabling "Next".
- **Styling**: Tailwind CSS + Shadcn UI.
