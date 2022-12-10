import React, { useState } from "react";
import styled from "styled-components";

import MergeButton from "components/MergeButton";
import Dialog from "components/Dialog";
import Heading1 from "components/Heading1";
import Button from "components/Button";

const StyledDialog = styled(Dialog)`
  margin: 0 2em;
  max-width: 40ch;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2em;
`;

type MergeInputProps = {
  onMerge: () => void;
};

const MergeInput: React.FC<MergeInputProps> = ({ onMerge }) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <>
      <MergeButton
        onClick={() => {
          setShowDialog(true);
        }}
      />

      {showDialog ? (
        <StyledDialog
          onClose={() => {
            setShowDialog(false);
          }}
        >
          <Heading1>
            Are you sure you want to merge your current set of colors?
          </Heading1>

          <p>
            The current set of colors will be lost and replaced by the mixed
            color.
          </p>

          <Row>
            <Button
              $secondary
              onClick={() => {
                setShowDialog(false);
              }}
            >
              Cancel
            </Button>

            <Button
              autoFocus
              onClick={() => {
                onMerge();
                setShowDialog(false);
              }}
            >
              Merge
            </Button>
          </Row>
        </StyledDialog>
      ) : null}
    </>
  );
};

export default MergeInput;
