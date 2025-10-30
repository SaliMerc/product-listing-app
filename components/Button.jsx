import { Button } from "react-native";

export default function CustomButton({ onPressAction, title, color, accessibilityLabel }) {
  return (
    <Button
      onPress={onPressAction}
      title={title || "Sign in"}
      color={color || "#841584"}
      accessibilityLabel={accessibilityLabel || "Learn more about this purple button"}
    />
  );
}
