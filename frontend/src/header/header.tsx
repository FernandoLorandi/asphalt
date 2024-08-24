import React from "react";
import { Home, Mail } from "lucide-react";

const Header = () => {
    return (
        <div className="bg-brand-primary-50 text-sm font-normal text-brand-primary-950">
            <div className="container py-3">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center">
                        <Home strokeWidth={1} className=" w-4 h-4 mr-2"/>
                        <a href="#"> Rua Marechal Deodoro, nº 893, 2º andar, sala 12, Prudentópolis/Pr</a>
                    </div>
                    <div className=" bg-brand-primary-950 h-5 w-0.5"/>
                    <div className="flex items-center">
                        <Mail strokeWidth={1} className=" w-4 h-4 mr-2"/>
                        <a href="#"> asphaltpavimentacao@hotmail.com</a>
                    </div>
                
                </div>
            </div>
        </div>
    )

}

export default Header