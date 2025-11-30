import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            ProductHub
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">How ProductHub Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Get started in minutes with our simple, step-by-step process designed for teams of all sizes.
        </p>
      </section>

      {/* Process Steps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-border">
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h2 className="text-3xl font-bold">Create Your Account</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Sign up in seconds with your email or SSO provider. No credit card required to get started with your
                free trial.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Instant setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multiple authentication methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Secure password encryption</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl border border-border overflow-hidden aspect-square flex items-center justify-center">
              <img src="/signup-form-interface.jpg" alt="Sign Up" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl border border-border overflow-hidden aspect-square flex items-center justify-center md:order-2">
              <img src="/team-setup-dashboard.jpg" alt="Team Setup" className="w-full h-full object-cover" />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h2 className="text-3xl font-bold">Invite Your Team</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Add team members and set up roles and permissions in minutes. Control who can access what with our
                granular permission system.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bulk invite users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom role management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Activity tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h2 className="text-3xl font-bold">Set Up Your Workspace</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Customize your workspace, configure integrations, and set up workflows that match your team's needs
                perfectly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Connect third-party tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automation workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom branding options</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl border border-border overflow-hidden aspect-square flex items-center justify-center">
              <img src="/workspace-configuration-settings.jpg" alt="Workspace Setup" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl border border-border overflow-hidden aspect-square flex items-center justify-center md:order-2">
              <img src="/analytics-dashboard-reports.jpg" alt="Start Collaborating" className="w-full h-full object-cover" />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h2 className="text-3xl font-bold">Start Collaborating</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Your team is now ready to collaborate! Start projects, assign tasks, and watch productivity soar with
                real-time collaboration features.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Project management tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-border">
        <h2 className="text-4xl font-bold text-center mb-16">Built for scale</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <p className="text-muted-foreground">Tasks completed daily</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Active teams worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-muted-foreground">Uptime guarantee</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-border text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using ProductHub to streamline their workflow.
        </p>
        <Button size="lg" className="gap-2">
          Start Your Free Trial <ArrowRight className="w-4 h-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-4">ProductHub</div>
              <p className="text-muted-foreground text-sm">Making workflow management simple and beautiful.</p>
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
            <p>&copy; 2025 ProductHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
