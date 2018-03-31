// Rails unobtrusive scripting adapter
import Rails from 'rails-ujs'
Rails.start()

// Turbolinks speeds up page transitions
import Turbolinks from 'turbolinks'
Turbolinks.start()

import '../turbolinks_events'

// Setup Stimulus application
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

const application = Application.start()
const context = require.context('controllers', true, /\.(js|ts)$/)
application.load(definitionsFromContext(context))
