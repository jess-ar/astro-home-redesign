/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    // customer loading policies
    'client:load'?: boolean
    'client:idle'?: boolean
    'client:visible'?: boolean
    'client:media'?: string
    // unified directive
    'is:client'?: boolean
  }
}
