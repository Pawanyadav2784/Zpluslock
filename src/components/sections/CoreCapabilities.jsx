
import { motion } from "framer-motion";
import { getHomeContent } from "../../controllers/homeController";
import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function CoreCapabilities() {
  const { capabilities } = getHomeContent();

  return (
    <section className="section" id="capabilities">
      <Container>
        <SectionTitle title="Enterprise-Grade Features" />

        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
            >
              <Card
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  hover:border-cyan-500/40
                  hover:shadow-[0_20px_50px_rgba(0,170,255,0.25)]
                "
              >
                {/* Shine Effect */}
                <div
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-full
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-500/20
                      to-blue-500/20
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <h3
                    className="
                      mb-3
                      text-xl
                      font-semibold
                      transition-colors
                      duration-300
                      group-hover:text-cyan-400
                    "
                  >
                    {title}
                  </h3>

                  <p className="leading-7 text-gray-400">
                    {description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CoreCapabilities;