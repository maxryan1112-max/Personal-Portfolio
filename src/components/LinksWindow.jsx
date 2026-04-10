import WindowFrame from './WindowFrame';

export default function LinksWindow({ onClose }) {
    return (
        <WindowFrame title="Links" onClose={onClose}>
            <ul className="space-y-2">
                <li>
                    <a href="https://github.com/maxryan1112-max" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/ryan-mwaura-190871299" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        Lets connect on Linkedin!
                    </a>
                </li>
                <li>
                    <a href="mailto:maxryan1112@gmail.com" className="text-blue-500 underline">
                        Feel free to reach out via Email!
                    </a>
                </li>
            </ul>
        </WindowFrame>
    );
}