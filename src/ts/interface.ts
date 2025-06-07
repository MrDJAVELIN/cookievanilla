interface ServerStats {
    players: {
        online: number;
        max: number;
        list: string[];
    };
    online: boolean;
}

interface MessageProps {
    text: string;
    icon?: React.ReactNode;
    type: "success" | "error" | "warning" | "info";
}

interface LogoProps {
    type: "title" | "logo";
    width: number;
    height: number;
    radius: number;
    className?: string;
}

interface HeaderProps {
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FaqProps {
    question: string;
    answer: string;
}

interface EmptyButtonProps {
    text: string;
    icon: React.ReactNode;
    className?: string;
}

interface ButtonProps {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
}

interface BMenuProps {
    stat: boolean;
    closeMenu: () => void;
}
