const Connect: React.FC = () => {
    return (
        <footer className="text-center mt-auto">
            <div className="flex flex-row gap-2 align-center justify-center">
                <h2>Check out -</h2>
                <a href="https://www.linkedin.com/in/shyam-sunder-saravanan/">Linkedin</a>
                <a href="https://x.com/N1tr0s_ken">Twitter</a>
                <a href="https://github.com/ShyamSunder149">Github</a>
                <a href="">Resume</a>
            </div>
                <p>Enjoy your {new Date().toLocaleString("en", { weekday: "long" })}</p>
                <i className="text-sm">Not gonna copyright so copy if you want :)</i>
        </footer>
    )
}

export default Connect;