import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { FC } from "react";
type data = {
  isOpen: boolean;
  onEmojiSelect: (emoji: { native: string }) => void;
};
const EmojiPicker: FC<data> = ({ onEmojiSelect, isOpen }) => {
  if (!isOpen) {
    return;
  } else {
    return (
      <div className="absolute bottom-[7%] right-[44px] none">
        <Picker
          data={data}
          previewPosition="none"
          onEmojiSelect={onEmojiSelect}
          emojiSize={20}
          emojiButtonSize={30}
        />
      </div>
    );
  }
};

export default EmojiPicker;
