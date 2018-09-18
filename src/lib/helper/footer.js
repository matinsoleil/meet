export default class footer {
    static get appSection(){
        return this.prototype.appSection;
    }

    static get helpSection(){
        return this.prototype.helpSection;
    }
    
    static get termsSection(){
        return this.prototype.termsSection
    }
}

footer.prototype.appSection = {
    title: 'Descarga la aplicación',
    links: [
        {
            url: 'https://play.google.com/store/apps/details?id=com.clarodrive.android',
            image: {
                url: require('@/img/apps/google-play-logo.svg')
            }
        },
        {
            url: 'https://itunes.apple.com/mx/app/claro-drive/id1250666367?mt=8',
            image: {
                url: require('@/img/apps/app-store-logo.svg')
            }
        },
    ]
}

footer.prototype.helpSection = {
    title: 'Ayuda',
    links: [
        {
            text: 'Acerca de <span class="claro-connect-red">Claro</span> <span class="claro-connect-dark">connect</span>'
        },
        {
            text: 'Preguntas frecuentes',
            url: '/faq',
            linkType: 'router-link'
          },
          {
            text: 'Contacto',
            url: '#',
            linkType: 'router-link'
          },
    ]
}

footer.prototype.termsSection = {
    title: 'Legales',
    links: [
        {
          text: 'Términos, condiciones y <br/>Politica de privacidad',
          url: '/terms',
          linkType: 'router-link'
        }
      ]
}