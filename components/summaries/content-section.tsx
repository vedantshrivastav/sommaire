function parsePoint(point: string) {
  const isNumbered = /^\d+\./.test(point);
  const isMainPoint = /^\s*[-–—*]\s+/.test(point);

  // Replace the Unicode property escape with a simpler emoji detection
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u2600-\u26FF]/u;
  const hasEmoji = emojiRegex.test(point);
  const isEmpty = !point.trim();

  return { isNumbered, isMainPoint, hasEmoji, isEmpty };
}

function parseEmojiPoint(content: string) {
  const cleanContent = content.replace(/^[\-\s]+/, "").trim();

  const matches = cleanContent.match(/^(\p{Emoji})\s+(.+)$/u);
  if (!matches) return null;

  const [_, emoji, text] = matches;

  return {
    emoji: emoji.trim(),
    text: text.trim(),
  };
}

const RegularPoint = ({ point, index }: { point: string; index: number }) => {
  return (
    <div
      key={`point-${index}`}
      className="group relative bg-linear-to-br 
  from-gray-200/10 to-gray-400/10.03 p-4 
  rounded-2xl border border-gray-500/10 hover:shadow-lg 
  transition-all"
    >
      <div
        className="absolute inset-0 bg-linear-to-r 
  from-gray-500/10 to-transparent opacity-0 
  group-hover:opacity-100 transition-opacity 
  rounded-2xl"
      />

      <p
        className="relative text-lg lg:text-xl 
  text-muted-foreground/90 leading-relaxed text-left"
      >
        {point}
      </p>
    </div>
  );
};

export default function ContentSection({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div>
      {points.map((point, index) => {
        const { isEmpty, isMainPoint, hasEmoji, isNumbered } =
          parsePoint(point);

        const emojiPoint = parseEmojiPoint(point);
        const emoji = emojiPoint?.emoji ?? "";
        const text = emojiPoint?.text ?? "";

        console.log(`Point ${index}:`, JSON.stringify(point));
        console.log({
          isEmpty,
          isMainPoint,
          hasEmoji,
          isNumbered,
          emoji,
          text,
        });

        if (isEmpty) return null;

        if (hasEmoji || isMainPoint) {
          return (
            <div
              className="group relative bg-linear-to-r from-gray-200/[0.08] to-gray-400/[0.03]
         p-4 rounded-2xl border border-gray-500/10 hover:shadow-lg
         transition-all"
              key={`point-${index}`}
            >
              <div className="absolute inset-0 bg-linear-to-r from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative flex items-start gap-3">
                <span className="text-lg lg:text-xl shrink-0 pt-1">
                  {emoji}
                </span>
                <p className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          );
        }

        return (
          <RegularPoint key={`point-${index}`} point={point} index={index} />
        );
      })}
    </div>
  );
}
