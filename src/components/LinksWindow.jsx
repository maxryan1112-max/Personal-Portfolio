import WindowFrame from './WindowFrame';

// Use this to list your social media or other relevant links.
export default function LinksWindow({ onClose }) {
    return (
        <WindowFrame title="Links" onClose={onClose}>
            <ul className="space-y-2">
                <li>
                    <a href="https://github.com/yourusername" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/yourhandle" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="mailto:you@example.com" className="text-blue-500 underline">
                        Email me
                    </a>
                </li>
            </ul>
        </WindowFrame>
    );
}