import "./main.scss";
import 'bootstrap';
import common from './common/js/common';
import header from './modules/header/header';
import questions from './modules/questions/questions';
import './assets/icons/icons';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

common();
header();
questions();
