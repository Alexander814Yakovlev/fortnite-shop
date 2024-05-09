function Footer() {
    return (   
        <footer className="page-footer main__color-theme">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} All rights reserved
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>        
    )
}

export default Footer