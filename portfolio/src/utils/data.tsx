import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

export const data: any = {
    info: {
        name: "Nuno Jesus",
        email: "nunoo101@hotmail.com",
        birthDate: new Date("06-06-1996"),
        professionalSummary: "Realização de vários ecrãs para o evento MIUT (Madeira Island Ultra Trail), trabalho proposto pela Universidade da Madeira, onde realizou, em grupo, a planificação do projeto, estudos de publico alvo, vários testes e a elaboração final do projeto, no âmbito da cadeira de Interação Humano Computador.\n" +
            "Montagem de um servidor SharePoint 2016, divido em 3 máquinas virtuais: Domain Controller; SQL Server; e SharePoint 2016.\n" +
            "Experiência profissional na área de Gestão Aplicacional, especializada na implementação e correção de soluções de SharePoint e .NET."
    },
    socials: [
        {
            key: 1,
            link: "https://pt.linkedin.com/in/nuno-jesus-320b081a2",
            text: "LinkedIn",
            icon: <LinkedInIcon />,
        },
        {
            key: 2,
            link: "https://github.com/nunoj1",
            text: "GitHub",
            icon: <GitHubIcon />,
        }
    ],
    studies: [
        {
            key: 1,
            title: "TÉCNICO PROFISSIONAL DE AUDIOVISUAIS – Escola Profissional Cristóvão Colombo ",
            duration: "2011 – 2014 – Madeira, Portugal",
            summary: "Destaque em Pós-Produção e Manipulação de imagem;\n" +
                "Participação em festivais de cinema;\n" +
                "Várias experiências em estúdio e no exterior.",
        },
        {
            key: 2,
            title: "TECNOLOGIAS E PROGRAMAÇÃO DE SISTEMAS DE INFORMAÇÃO – Universidade da Madeira",
            duration: "2018 – 2020 – Madeira, Portugal",
            summary: "Criação de ecrãs em VUE para o evento MIUT 2020",
        }
    ],
    work: [

        {
            key: 1,
            title: "ESTÁGIO EM TÉCNICO DE AUDIOVISUAIS – Marítimo Tv ",
            duration: "01/2014 – 02/2014 – Madeira, Portugal",
            summary:
                "Gravação de Voz-Off;\n" +
                "Gravação de video (dos treinos do clube e do estabelecimento);\n" +
                "Pós-Produção.",
        },
        {
            key: 2,
            title: "ESTÁGIO DE WEBDESIGN – PCN Informática",
            duration: "02/2014 – 03/2014 – Madeira, Portugal",
            summary: "Criação de Banners e manipulação de imagem para o grupo online da companhia.",
        },
        {
            key: 3,
            title: "ENGENHEIRA DE APLICAÇÕES – Unipartner IT Services",
            duration: "17/02/2020 – ATUAL – Madeira, Portugal",
            summary:
                "Integração na equipa de Gestão Aplicacional de SharePoint e K2.\n" +
                "Gestão de portal de tickets;\n" +
                "Report de Aplicações;\n" +
                "Debugging aplicacional;\n" +
                "Correção de erros aplicacionais;\n" +
                "Desenvolvimento de novas funcionalidades nos portais existentes;\n" +
                "Desenvolvimento de novos portais internos\n" +
                "Testes integrados;"
        },
    ],
    operatingSystems: [
        "Windows 10",
        "Windows 7",
        "Windows Server 2012 R2",
        "Windows Server 2012",
        "Windows Server 2008",
        "Windows Server 2003",
        "Linux",
    ],
    microsoftTools: [
        "SharePoint 2007",
        "SharePoint 2010",
        "SharePoint 2013",
        "SharePoint 2016",
        "SharePoint Online",
        "Office 365",
        "Visual Studio 2008",
        "Visual Studio 2012",
        "Visual Studio 2019",
        "Visual Studio Code",
        "ULS Viewer",
    ],
    languagesAndTools: [
        "Powershell",
        "C#",
        "JavaScript",
        "Typescript",
        "JQuery",
        "ASP.Net",
        "C++",
        "Python",
        "React",
        "Angular"
    ],
    databases: [
        "SQL Management Studio 18",
        "Oracle",
    ]
}

