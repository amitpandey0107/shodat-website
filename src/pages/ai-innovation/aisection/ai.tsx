import React from "react";
import styles from "./ai.module.css";
import Accordion from "react-bootstrap/Accordion";
import ExportedImage from "next-image-export-optimizer";
export default function AISection() {
  return (
    <>
      <div className={`${styles.ai}`}>
        <div className={`${styles.aiContainer}`}>
          <div className={`${styles.bLeft}`}>
            <div className={`${styles.lc}`}>
              <h2>
                We integrate cutting-edge Azure OpenAI and Generative AI
                capabilities to bring our clients unparalleled AI-powered
                solutions.{" "}
              </h2>
              <p>
                By tapping into Microsoft&apos;s robust AI infrastructure, we
                offer businesses the ability to harness generative models and
                OpenAI&apos;s advanced machine learning capabilities for
                real-time, scalable AI applications.
              </p>
            </div>
          </div>

          <div className={`${styles.bRight}`}>
            <div className={`${styles.rc}`}>
              <Accordion
                defaultActiveKey="10"
                className={`${styles.aiAccordian} aiAccordian appraochAccordion businessAccordian`}
              >
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                      <div className={`${styles.icons}`}>
                        <ExportedImage
                          src="/img/aiInnovation/azure.svg"
                          alt="Azure Services"
                          height={48}
                          width={48}
                        />
                        <ExportedImage
                          src="/img/aiInnovation/openAI.svg"
                          alt="OpenAI Services"
                          height={48}
                          width={48}
                        />
                      </div>
                      <h6>Azure OpenAI Services</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                      <p>
                        With Azure OpenAI, we leverage powerful language models
                        to solve complex problems in natural language
                        understanding and generation, enabling applications like
                        intelligent document processing, automated content
                        creation and conversational agents. This allows
                        businesses to automate customer service, generate
                        dynamic content and create personalized experiences at
                        scale.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                      <div className={`${styles.icons}`}>
                        <ExportedImage
                          src="/img/aiInnovation/genAI.svg"
                          alt="Generative AI"
                          height={48}
                          width={48}
                        />
                      </div>
                      <h6>Generative AI</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                      <p>
                        Generative AI transforms how businesses approach
                        innovation, with applications in creative design,
                        product development, marketing and more. Our expertise
                        in generative models allows us to offer solutions for
                        content creation, AI-assisted design and even
                        AI-generated insights, helping businesses to quickly
                        iterate and bring new ideas to market.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                      <div className={`${styles.icons}`}>
                        <ExportedImage
                          src="/img/aiInnovation/chatbot.svg"
                          alt="Conversational AI & Chatbots"
                          height={48}
                          width={48}
                        />
                      </div>
                      <h6>Conversational AI & Chatbots</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                      <p>
                        Through the Azure platform, we implement conversational
                        AI systems that understand and respond to natural
                        language queries, enhancing customer support and
                        automating internal workflows. These systems are
                        scalable, secure and seamlessly integrate into existing
                        infrastructure, providing high-quality interaction at
                        any scale.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    <div className={`${styles.accordionHeader}`}>
                      <div className={`${styles.icons}`}>
                        <ExportedImage
                          src="/img/aiInnovation/contentCreation.svg"
                          alt="AI-Driven Insights and Content Creation"
                          height={48}
                          width={48}
                        />
                      </div>
                      <h6>AI-Driven Insights and Content Creation</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={`${styles.accBody}`}>
                      <p>
                        Generative AI&apos;s capability to produce human-like
                        content and designs enables companies to expedite
                        marketing strategies, product manuals and creative
                        campaigns. Azure OpenAI&apos;s tools allow us to rapidly
                        generate content, analyze large datasets and provide
                        context-based recommendations.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
