import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
        textShadow: "none"
    }
});

const typography = new Typography(fairyGateTheme);

export default typography;