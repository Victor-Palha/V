export function Header(){
    return (
        <header className="bg-bg1 py-6 font-ibm flex items-center justify-between text-white border-b-[1px] border-bg2">
            <h1 className="text-lg">
                <span className="text-brand1">
                    &lt;V/&gt;
                </span>
                Victor Palha
            </h1>

            <nav className="flex gap-2">
                <a href="https://victor-palha.github.io/">Blog</a>
            </nav>
        </header>
    )
}