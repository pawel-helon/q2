import { SplitButton } from "@/components/split-button";

const TempPage = () => {
  return (
    <div className="p-10">
      <SplitButton
        primaryActionLabel="Accept"
        secondaryActionLabel="Decline"
      />
    </div>
  );
};

export default TempPage;
