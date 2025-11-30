import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, BarChart3, Users, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Benoit</div>
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#prototype" className="text-foreground hover:text-primary transition-colors">
              Prototype
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance mb-6">
          Your Friendly And Smart
          <span className="block text-primary">Benoit Companion</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
          The smart platform built for tomorrow's most innovative teams. Discover new ways to search, collaborate, and
          succeed.
        </p>
        <Button size="lg" className="gap-2">
          View Prototype <ArrowRight className="w-4 h-4" />
        </Button>
      </section>

      {/* Features Section - "So, What Makes Us Unique?" */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">So, What Makes Us Unique?</h2>
          <p className="text-muted-foreground text-lg">Discover the features that set us apart</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Lightning Search</h3>
            <p className="text-muted-foreground text-sm">
              Find what you need instantly with our advanced search technology.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Enterprise Security</h3>
            <p className="text-muted-foreground text-sm">Bank-level encryption keeps your data safe and secure.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Mobile First</h3>
            <p className="text-muted-foreground text-sm">Access your workspace anywhere, anytime on any device.</p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Team Collaboration</h3>
            <p className="text-muted-foreground text-sm">Work together seamlessly with powerful collaboration tools.</p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Analytics & Insights</h3>
            <p className="text-muted-foreground text-sm">
              Track performance and make data-driven decisions with real-time analytics.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Custom Integrations</h3>
            <p className="text-muted-foreground text-sm">
              Connect with your favorite tools and platforms effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Set Up Profile</h3>
            <p className="text-muted-foreground">
              Create your account and customize your workspace in minutes with our easy setup wizard.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Browse & Filter</h3>
            <p className="text-muted-foreground">
              Explore powerful filtering options to find exactly what you're looking for.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Organize & Collaborate</h3>
            <p className="text-muted-foreground">
              Organize your content and invite team members to collaborate in real-time.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Analyze & Track</h3>
            <p className="text-muted-foreground">
              Get insights into your progress with comprehensive analytics and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Prototype Walkthrough Section */}
      <section id="prototype" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Walkthrough Of Our Prototype</h2>
          <p className="text-muted-foreground text-lg">See how Benoit works in action</p>
        </div>

        <div className="space-y-16">
          {/* Walkthrough Item 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Welcome & Onboarding</h3>
              <p className="text-muted-foreground mb-4">
                Get started in seconds with our intuitive onboarding process. Set up your profile, preferences, and
                invite your team all in one place.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Quick 3-step setup wizard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Personalized workspace templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Pre-configured best practices</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/onboarding-screen.jpg" alt="Onboarding screen" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Walkthrough Item 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/search-screen.jpg" alt="Search screen" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Customize Your Search</h3>
              <p className="text-muted-foreground mb-4">
                Our advanced search engine learns from your behavior and helps you find what you need faster than ever
                before.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>AI-powered search suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Custom search filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Save favorite searches</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Walkthrough Item 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Browse & Filters</h3>
              <p className="text-muted-foreground mb-4">
                Explore content with our powerful filtering system designed to help you discover what matters most.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Multi-level filtering options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Instant results preview</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Save filter combinations</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/filters-screen.jpg" alt="Filters screen" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Walkthrough Item 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/track-screen.jpg" alt="Track screen" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Make & Track</h3>
              <p className="text-muted-foreground mb-4">
                Create, manage, and track your progress all in one place with real-time updates and notifications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Drag-and-drop organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Real-time progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Automated notifications</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Walkthrough Item 5 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Keep Track of Favorites</h3>
              <p className="text-muted-foreground mb-4">
                Mark your favorite items, projects, and insights for quick access whenever you need them.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>One-click favoriting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Organized collections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Share favorites with team</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/favorites-screen.jpg" alt="Favorites screen" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Walkthrough Item 6 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/partner-screen.jpg" alt="Partner screen" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Stand Out as a Partner</h3>
              <p className="text-muted-foreground mb-4">
                Showcase your expertise and build credibility on our partner marketplace.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Create a partner profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Showcase your portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Get discovered by clients</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Walkthrough Item 7 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Monitor Your Progress</h3>
              <p className="text-muted-foreground mb-4">
                Stay on top of your metrics with comprehensive dashboards and real-time reporting.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Customizable dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Real-time analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Exportable reports</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/progress-screen.jpg" alt="Progress screen" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Walkthrough Item 8 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
            <div className="bg-card border-2 border-border rounded-3xl p-4 aspect-[9/16] flex items-center justify-center">
              <img src="/perfect-screen.jpg" alt="Perfect screen" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Stand Out as a Partner</h3>
              <p className="text-muted-foreground mb-4">
                Build lasting relationships and grow your network within our thriving community.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Community engagement tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Networking events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Revenue sharing opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="gap-2">
            View Prototype <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet the Team!</h2>
          <p className="text-muted-foreground text-lg">
            Behind Benoit, there's a passionate team dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-primary/50" />
              </div>
              <h3 className="font-bold text-lg mb-1">Team Member {i}</h3>
              <p className="text-muted-foreground text-sm">Role & Title</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using Benoit to work smarter and achieve more.
        </p>
        <Button size="lg" className="gap-2">
          Get Started Free <ArrowRight className="w-4 h-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">Benoit</div>
              <p className="text-muted-foreground text-sm">Your friendly and smart companion for modern teams.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Benoit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
