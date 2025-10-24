import * as NavMenu from "@radix-ui/react-navigation-menu";

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

import './NavBar.css';

export const NavBar = () => {
    return (
        <NavMenu.Root className="NavBar" delayDuration={1000}>

            <NavMenu.Link className='logo-link' href="/">
                <div className='logo-text'>Monica Lu</div>
            </NavMenu.Link>

            <NavMenu.List className="NavBar-list">
                <NavMenu.Item>
                    <NavMenu.Link className='link' href="/aboutme">About Me</NavMenu.Link>
                </NavMenu.Item>
                <NavMenu.Item>
                    <NavMenu.Link className='link' href="/projects">Projects</NavMenu.Link>
                </NavMenu.Item>
                <NavMenu.Item>
                    <NavMenu.Link className='link' href="/assets/resume/Monica_Resume_PDF.pdf">Resume</NavMenu.Link>
                </NavMenu.Item>
                <ThemeToggle />
            </NavMenu.List>
        </NavMenu.Root>
    )
}