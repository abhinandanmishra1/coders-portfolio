import React from 'react';
import { ReactComponent as ProblemSolving } from "../../assets/svg/hr-skills/ProblemSolving.svg";
import { ReactComponent as Algorithm } from "../../assets/svg/hr-skills/Algorithm.svg";
import { ReactComponent as AI } from "../../assets/svg/hr-skills/AI.svg";
import { ReactComponent as C } from "../../assets/svg/hr-skills/C.svg";
import { ReactComponent as CLanguage } from "../../assets/svg/hr-skills/CLanguage.svg";
import { ReactComponent as CPP } from "../../assets/svg/hr-skills/C++.svg";
import { ReactComponent as CPP2 } from "../../assets/svg/hr-skills/CPP.svg";
import { ReactComponent as DataBase } from "../../assets/svg/hr-skills/DataBase.svg";
import { ReactComponent as DataStructure } from "../../assets/svg/hr-skills/DataStructure.svg";
import { ReactComponent as DaysOfCode } from "../../assets/svg/hr-skills/DaysOfCode.svg";
import { ReactComponent as DaysOfJs } from "../../assets/svg/hr-skills/DaysOfJs.svg";
import { ReactComponent as FunctionalProgramming } from "../../assets/svg/hr-skills/FunctionalProgramming.svg";
import { ReactComponent as Java } from "../../assets/svg/hr-skills/Java.svg";
import { ReactComponent as LinuxShell } from "../../assets/svg/hr-skills/LinuxShell.svg";
import { ReactComponent as Mathematics } from "../../assets/svg/hr-skills/Mathematics.svg";
import { ReactComponent as Python } from "../../assets/svg/hr-skills/Python.svg";
import { ReactComponent as Regex } from "../../assets/svg/hr-skills/regex.svg";
import { ReactComponent as Ruby } from "../../assets/svg/hr-skills/Ruby.svg";
import { ReactComponent as SQL } from "../../assets/svg/hr-skills/SQL.svg";

const HrSkillLogo = ({skill, className}) => {
    const HrSkillComponent = {
        Algorithm: <Algorithm className={className}/>,
        Ai : <AI className={className}/>,
        C: <C className={className}/>,
        CLanguage: <CLanguage className={className}/>,
        "C++": <CPP className={className}/>,
        CPP: <CPP2 className={className} />,
        DataStructure: <DataStructure className={className}/>,
        DataBase: <DataBase className={className}/>,
        DaysOfCode: <DaysOfCode className={className} />,
        DaysOfJS: <DaysOfJs className={className} />,
        FunctionalPrograming: <FunctionalProgramming className={className}/>,
        Java: <Java className={className}/>,
        LinuxShell: <LinuxShell className={className}/>,
        Mathematics: <Mathematics className={className}/>,
        ProblemSolving: <ProblemSolving className={className}/>,
        Python: <Python className={className}/>,
        Regex: <Regex className={className}/>,
        Ruby: <Ruby className={className}/>,
        Sql: <SQL className={className}/>,
    };      

  return (
    HrSkillComponent[skill] || null
  )
}

export default HrSkillLogo