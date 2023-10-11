import { RenderValidator } from './components/render_validator'
import { Validation } from './components/validation'

const renderValidator = new RenderValidator()
renderValidator.renderValidator()

const validation = new Validation(renderValidator.getElement())
validation.setupInputHandler()
validation.setupBtnHandler()
