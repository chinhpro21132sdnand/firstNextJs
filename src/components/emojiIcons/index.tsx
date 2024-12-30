import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiPicker = ({ onEmojiSelect, isOpen }) => {
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
