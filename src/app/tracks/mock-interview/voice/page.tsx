"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { Mic } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function VoiceIntro() {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
          <Mic className="h-5 w-5 text-indigo-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            Voice is the future of AI interaction
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Voice is rapidly becoming the primary way people interact with AI.
            From smart assistants to AI-powered customer service, speaking is
            faster and more natural than typing. For an interview simulator,
            this is especially important — real interviews are{" "}
            <strong className="text-foreground">spoken conversations</strong>,
            not written essays. By adding voice input, users can speak their
            answers naturally, have them transcribed to text, and get AI
            feedback on what they actually said — simulating the real interview
            experience far more authentically.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Make sure Auto Accept is enabled",
    description:
      "This feature involves multiple file changes across your codebase. Auto mode lets Codex work through them while still asking when an action leaves the safe boundary.",
  },
  {
    title: "Send this prompt to Codex",
    prompt: `Add a voice input feature to my interview simulator as an alternative to typing text answers. Here's exactly what I need:

RECORDING INTERFACE:
- Add a microphone button next to the existing text answer box for each question
- When the user clicks the mic button, start recording audio using the browser's MediaRecorder API (navigator.mediaDevices.getUserMedia)
- Show a clear visual recording state: a pulsing red indicator, a live timer showing recording duration, and a stop button
- When the user stops recording, show a playback preview so they can listen to their answer before submitting
- Include a "Re-record" button to discard and try again, and a "Use this recording" button to confirm
- Handle browser permission prompts gracefully — if the user denies microphone access, show a helpful message explaining how to enable it

TRANSCRIPTION:
- Send the recorded audio to a server-side API route for transcription
- Use OpenAI's audio transcription API or a current OpenAI multimodal model that supports transcription
- Once transcribed, display the text in the answer box so the user can review and edit it before submitting
- Show a loading state during transcription (e.g., "Transcribing your answer...")

TECHNICAL REQUIREMENTS:
- Record audio in webm/opus format for best browser compatibility
- Keep the audio files client-side until submission (don't persist them)
- Add a new API route at /api/transcribe to handle the server-side transcription
- Make sure the existing text input still works — voice is an alternative, not a replacement
- The submit and AI feedback flow should work identically whether the user typed or spoke their answer

UI/UX:
- The mic button should be visually consistent with the existing design system
- On mobile, make the recording controls touch-friendly with larger tap targets
- Add a small label or tooltip on first use: "You can also answer by voice"

Make sure to handle edge cases: what if the user navigates away while recording? What if the recording is too short (under 1 second)? What if the browser doesn't support MediaRecorder (show a fallback message)?`,
  },
  {
    title: "Let Codex build the feature",
    description:
      "Codex will add the voice recording UI, create the transcription API route, and wire everything together. This touches multiple files, so review the final diff carefully.",
  },
  {
    title: "Test it out",
    description:
      "Once Codex finishes, run your app locally and try answering a question by voice. Click the mic, speak your answer, review the transcription, edit if needed, and submit. The AI feedback should work the same as with typed answers.",
  },
  {
    title: "Redeploy to Vercel",
    description:
      "Push your changes to GitHub and Vercel will automatically redeploy. Test the voice feature on your live URL — it works on mobile too!",
  },
];

export default function VoicePage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={5}
      accentClass="track-3"
      sectionTitle="Voice & Vision"
      sectionDescription="Add voice recording as an alternative way to answer interview questions."
      steps={steps}
      stepIndexOffset={getSectionOffset(5)}
      isLastSection
      isStretchGoal
      introContent={<VoiceIntro />}
    />
  );
}
