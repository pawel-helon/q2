"use client";

import { SplitButton } from "./split-button";

export const Wrapper = () => {
  const primaryAction = () => {
    console.log("Clicked primary action");
  };

  const secondaryAction = () => {
    console.log("Clicked secondary action");
  };

  return (
    <div className="m-10">
      <SplitButton
        primaryAction={primaryAction}
        primaryActionLabel="Accept"
        secondaryAction={secondaryAction}
        secondaryActionLabel="Decline"
      />
    </div>
  );
};
