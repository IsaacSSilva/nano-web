const menuTrue = () => {

    return (
        <>
            <div className="h-full">
                <p className="m-auto py-2.5 text-base font-black"> Ola <strong className="text-rose-600 text-2xl font-thin">Dev</strong> , ao <strong className="text-rose-600 text-2xl font-thin">nano X</strong></p>
            
                <nav title="nav root from User comun" className="space-y-3 mb-16">
                    <span>From User comun:</span>
                    <ul className="flex flex-col gap-2.5 text-lg">
                    <a href="/">
                        <li>Home</li>
                    </a>
                    <a href="/">
                        <li>Projetos</li>
                    </a>
                    <a href="/">
                        <li>
                        Desafios
                        </li>
                    </a>
                    <a href="/">
                        <li>
                        Progresso
                        </li>
                    </a>
                    <a href="/">
                        <li>
                        Blog
                        </li>
                    </a>
                    <a href="/">
                        <li>
                        Sobre
                        </li>
                    </a>
                    </ul>
                </nav>
                
                <nav title="nav root from developer" className="space-y-3 mb-5">
                    <span>From Developer:</span>
                    <ul className="flex flex-col gap-2.5 font-mono text-lg">
                    <a href="/">
                        <li>root</li>
                    </a>
                    <a href="/dashnano">
                        <li>Dashnano</li>
                    </a>
                    <a href="/dashnano/auth">
                        <li>
                        auth
                        </li>
                    </a>
                    </ul>
                </nav>

            </div>
        
        </>
    )
}


const menuFalse = () => {
    return (
        <>
            <div className="h-full">
                <p className="m-auto py-2.5 text-base font-black"> Bem-Vindo ao <strong className="text-rose-600 text-2xl font-thin">nano X</strong></p>
                
                <nav className="space-y-3 mb-16">
                    <ul className="flex flex-col gap-2.5 text-lg">
                    <a href="/">
                        <li>Home</li>
                    </a>
                    <a href="/">
                        <li>Projetos</li>
                    </a>
                    <a href="/">
                        <li>
                        Desafios
                        </li>
                    </a>
                    <a href="/">
                        <li>
                        Progresso
                        </li>
                    </a>
                    <a href="/">
                        <li>
                        Blog
                        </li>
                    </a>
                    <a href="/">
                        <li>
                        Sobre
                        </li>
                    </a>
                    </ul>
                </nav>

            </div>
            
        </>
      )
}

const menu = {
    On: menuTrue,
    Off: menuFalse
}

export default menu