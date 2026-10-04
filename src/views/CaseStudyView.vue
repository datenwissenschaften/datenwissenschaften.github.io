<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageIntro from '../components/PageIntro.vue'
import labImage from '../assets/img/speedlab/lab.png'
import methodImage from '../assets/img/speedlab/method.png'

const disciplines = [
  {
    label: 'Laya',
    title: 'Model fine-tuning',
    lead: 'Adapting a small pretrained model to a narrow task with reinforcement learning, on hardware an organisation already owns.',
    concepts: [
      { name: 'Reinforcement fine-tuning.', text: 'Group-relative policy optimisation updates every weight from rewarded outcomes instead of labelled examples.' },
      { name: 'Reward design.', text: 'Rewards are built only from verified signals and shaped so the intended behaviour is learnable and cannot be gamed.' },
      { name: 'Stable optimisation.', text: 'A measured-KL trust region and importance-weighted exploration keep every update controlled and prevent policy collapse.' },
      { name: 'Curriculum learning.', text: 'Training resumes from mastered checkpoints, so the model practises the hardest phase instead of replaying the easy ones.' },
      { name: 'Resource efficiency.', text: '8-bit optimiser states and mixed precision fit full fine-tuning into 8 GB of GPU memory.' },
    ],
    value: 'Domain-specific small models that run on premises, keep data and weights under your control and cost a fraction of hosted inference.',
  },
  {
    label: 'Claude Code',
    title: 'Prompt and agentic engineering',
    lead: 'Turning a general-purpose AI agent into a dependable, unattended engineering process.',
    concepts: [
      { name: 'Prompt engineering.', text: 'A versioned operating prompt defines goals, priorities, success criteria and stop conditions, and is reviewed like code.' },
      { name: 'Context engineering.', text: 'Reusable skills, verified project notes and earlier lab reports carry knowledge from one run to the next without retraining.' },
      { name: 'Tool orchestration.', text: 'The agent drives an emulator, web research, test suites and deployments through explicitly permitted tools.' },
      { name: 'Guardrails.', text: 'Least-privilege permissions, mandatory tests and linting, and a rollback whenever a deployment fails.' },
      { name: 'Agent observability.', text: 'Run transcripts are analysed for failure modes, such as stopping early or misreading a failed job, and the prompt and runtime are improved accordingly.' },
    ],
    value: 'Agents that act on real systems within defined boundaries, with an audit trail for every change they make.',
  },
]

const repositories = [
  {
    name: 'agentic-data-analyst',
    group: 'Analytics agents',
    description: 'Guarded agentic analytics: natural-language questions become dbt-grounded plans, a typed intermediate representation and validated PySpark execution — never exec().',
    stack: ['Python', 'PySpark', 'dbt'],
    license: 'MIT',
  },
  {
    name: 'spark-data-quality',
    group: 'Data quality',
    description: 'Typed, Spark-native data-quality validation and profiling that combines compatible checks into a single aggregation pass.',
    stack: ['Python', 'PySpark', 'Pydantic'],
    license: 'MIT',
  },
  {
    name: 'experimentation-toolkit',
    group: 'Statistics',
    description: 'A typed library for A/B experiments covering inference, sample-ratio-mismatch diagnostics, power analysis and multiple-testing correction.',
    stack: ['Python', 'SciPy', 'Pydantic'],
    license: 'MIT',
  },
  {
    name: 'spark-asammdf',
    group: 'Automotive data',
    description: 'An Apache Spark DataSource V2 connector for distributed analysis of ASAM MDF4 vehicle measurement data, with filter pushdown into the file.',
    stack: ['Scala', 'Apache Spark', 'Python'],
    license: 'MIT',
  },
  {
    name: 'retro-speedlab-core',
    group: 'Retro Speedlab',
    description: 'The engine behind the lab: the Laya decision model reads the game as text, picks named moves and learns from rewards with group-relative policy gradients on a consumer GPU.',
    stack: ['Python', 'PyTorch', 'Laya'],
    license: 'GPL-3.0',
  },
  {
    name: 'retro-speedlab',
    group: 'Retro Speedlab',
    description: 'A Cookiecutter template for game packages: a skeleton that knows nothing about its game until scheduled Claude Code lab runs grow it.',
    stack: ['Python', 'Cookiecutter', 'Claude Code'],
    license: 'GPL-3.0',
  },
]
</script>

<template>
  <div>
    <PageIntro
      title="Public projects,"
      accent="shown in full."
      copy="Six open-source repositories and one live AI research lab—inspectable evidence of how I approach data engineering, machine learning, delivery and operations."
    >
      <template #eyebrow>Public case studies</template>
    </PageIntro>

    <section class="case-repo-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">Open-source repositories</p>
            <h2>Client work stays private.<br />This code does not.</h2>
          </div>
          <p>
            Focused libraries drawn from recurring client problems—guarded analytics agents, data quality,
            experimentation and automotive measurement data—alongside the engine and template behind Retro Speedlab.
          </p>
        </div>

        <div class="case-repo-grid">
          <article
            v-for="repository in repositories"
            :key="repository.name"
            class="case-repo"
            :class="{ 'is-speedlab': repository.group === 'Retro Speedlab' }"
          >
            <RouterLink
              v-if="repository.group === 'Retro Speedlab'"
              class="case-repo-group"
              :to="{ hash: '#retro-speedlab' }"
            >
              Retro Speedlab · see below ↓
            </RouterLink>
            <span v-else class="case-repo-group">{{ repository.group }}</span>
            <h3>
              <a
                :href="`https://github.com/datenwissenschaften/${repository.name}`"
                target="_blank"
                rel="noopener noreferrer"
              >{{ repository.name }} <span aria-hidden="true">↗</span></a>
            </h3>
            <p>{{ repository.description }}</p>
            <div class="case-repo-meta">
              <span>{{ repository.stack.join(' · ') }}</span>
              <span>{{ repository.license }}</span>
            </div>
          </article>
        </div>

        <div class="case-link-row">
          <a
            class="text-link"
            href="https://github.com/datenwissenschaften"
            target="_blank"
            rel="noopener noreferrer"
          >View all repositories on GitHub ↗</a>
        </div>
      </div>
    </section>

    <section id="retro-speedlab" class="wrap case-overview">
      <aside class="case-facts">
        <p class="eyebrow">At a glance</p>
        <dl>
          <div><dt>Project</dt><dd>Retro Speedlab</dd></div>
          <div><dt>Type</dt><dd>Independent research lab</dd></div>
          <div><dt>Focus</dt><dd>Self-learning game agents</dd></div>
          <div><dt>Disciplines</dt><dd>Model fine-tuning · Prompt and agentic engineering</dd></div>
          <div><dt>Status</dt><dd><span class="status-dot" /> Live and learning</dd></div>
        </dl>
      </aside>

      <div class="case-narrative">
        <p class="eyebrow">Why it exists</p>
        <h2>Useful evidence, without breaking trust.</h2>
        <p class="case-lead">
          Much of my commercial work sits inside client environments and is protected by non-disclosure agreements.
          Retro Speedlab offers a modest, transparent alternative: a real system that can be inspected, used and
          challenged in public.
        </p>
        <p>
          The lab asks a focused question: how far can one small decision model get through a retro game on its own?
          Answering it combines two disciplines that organisations increasingly need together. Laya, a compact
          pretrained language model, is fine-tuned with reinforcement learning: it reads the game state as text,
          chooses between named moves and updates its weights from rewards, around the clock on an everyday desktop
          with a GPU from 2018. Around it, Claude Code works as an autonomous engineering agent. Several times a day,
          guided by a versioned operating prompt, it researches how a level is beaten, verifies each fact in the
          emulator, extends the game package, tests and deploys it, and documents the result in a lab report.
        </p>
        <p>
          The playful subject keeps the experiment approachable; the engineering behind it is the same I apply to
          client systems.
        </p>
        <p>
          Everything happens in public: the training streams live on Twitch, and every lab report and every beaten
          level is published on the lab's website.
        </p>
        <p>
          It is not intended to stand in for the scale or constraints of an enterprise engagement. It simply makes
          the working habits visible: narrow the problem, build the whole path, automate repeatable operations,
          measure what is running and keep ownership of code and data.
        </p>
        <div class="case-link-row">
          <a
            class="button button-primary"
            href="https://www.retrospeedlab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Visit the lab ↗</a>
          <a
            class="text-link"
            href="https://www.retrospeedlab.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >Inspect the live tech stack ↗</a>
        </div>
      </div>
    </section>

    <section class="wrap case-disciplines">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Two disciplines, one system</p>
          <h2>A model that learns.<br />An agent that engineers.</h2>
        </div>
        <p>
          Fine-tuning shapes what a model does; prompt and agentic engineering shape how AI acts on real systems.
          The lab practises both in production, under the constraints clients face: limited hardware, unattended
          operation and the need to explain every result.
        </p>
      </div>

      <div class="case-discipline-grid">
        <article v-for="discipline in disciplines" :key="discipline.title">
          <span>{{ discipline.label }}</span>
          <h3>{{ discipline.title }}</h3>
          <p class="case-discipline-lead">{{ discipline.lead }}</p>
          <ul>
            <li v-for="concept in discipline.concepts" :key="concept.name">
              <strong>{{ concept.name }}</strong> {{ concept.text }}
            </li>
          </ul>
          <p class="case-discipline-value"><strong>For clients:</strong> {{ discipline.value }}</p>
        </article>
      </div>
    </section>

    <section class="wrap case-gallery">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Inside the product</p>
          <h2>Designed to be used,<br />not merely demonstrated.</h2>
        </div>
        <p>
          The website is fed by the training itself: the live stream, the lab reports and the method behind them.
          These are live views of the lab rather than presentation mock-ups.
        </p>
      </div>
      <div class="case-gallery-grid">
        <figure>
          <div class="case-gallery-image">
            <img
              :src="labImage"
              alt="Retro Speedlab home page with the live training stream, the game on the bench and the latest lab report"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>01 / Live lab</span>
            <p>The live stream shows every decision Laya makes, next to the game on the bench and the latest lab report.</p>
          </figcaption>
        </figure>
        <figure>
          <div class="case-gallery-image">
            <img
              :src="methodImage"
              alt="Retro Speedlab method page explaining in six steps how Laya plays and learns"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>02 / Open method</span>
            <p>Six steps explain how Laya plays and learns, and what an everyday desktop can and cannot do.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="case-system-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">End-to-end system</p>
            <h2>From game memory<br />to a learned move.</h2>
          </div>
          <p>
            Each stage is connected, automated and independently inspectable. The lab loop runs unattended and favours
            portable, open components over unnecessary platform dependency.
          </p>
        </div>

        <div class="speedlab-system" aria-label="Retro Speedlab lab loop from game memory to a published result">
          <div class="system-head">
            <span>Retro Speedlab / lab loop</span>
            <span><i /> Operational</span>
          </div>
          <ol class="system-stages">
            <li style="--stage: 0">
              <div class="stage-top">
                <span class="stage-number">01</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Describe</strong>
              <small>Game package · RAM as text</small>
              <em>State described</em>
            </li>
            <li style="--stage: 1">
              <div class="stage-top">
                <span class="stage-number">02</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Decide</strong>
              <small>Laya · named actions</small>
              <em>Move chosen</em>
            </li>
            <li style="--stage: 2">
              <div class="stage-top">
                <span class="stage-number">03</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Learn</strong>
              <small>PyTorch · 8-bit AdamW · RTX 2070</small>
              <em>Weights updated</em>
            </li>
            <li class="decision-stage" style="--stage: 3">
              <div class="stage-top">
                <span class="stage-number">04</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Improve</strong>
              <small>Claude Code · pytest · Dokku</small>
              <div class="decision-gate" aria-label="Quality gate: verified changes deploy, otherwise they are reverted">
                <span>pass → deploy</span><span>fail ↺ revert</span>
              </div>
            </li>
            <li style="--stage: 4">
              <div class="stage-top">
                <span class="stage-number">05</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>Publish</strong>
              <small>FastAPI · PostgreSQL · Twitch</small>
              <em>Live in public</em>
            </li>
          </ol>
          <div class="system-foot">
            <span>Self-hosted on Dokku</span>
            <span>Unattended around the clock</span>
            <span>Every step reported</span>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap case-evidence">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">What it demonstrates</p>
          <h2>Small enough to inspect.<br />Complete enough to be useful.</h2>
        </div>
        <p>
          The value of this case study is not a polished concept deck. It is the connection between a research
          question, model execution and day-to-day operation.
        </p>
      </div>

      <div class="case-evidence-grid">
        <article>
          <span>01</span>
          <h3>Research framing</h3>
          <p>One narrow question, answered in public: how far a small decision model gets through a game on consumer hardware.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Measurable outcomes</h3>
          <p>Every change is judged against live metrics—rewards, action probabilities and completed attempts—before and after it ships.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Governed autonomy</h3>
          <p>The agent works unattended within explicit rules: no secrets, no deleted data, no unreviewed releases, and a report for every run.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Full-stack delivery</h3>
          <p>A Vue website and a FastAPI service on PostgreSQL, fed directly by the training: beaten levels, videos and lab reports.</p>
        </article>
        <article>
          <span>05</span>
          <h3>Operational discipline</h3>
          <p>Dokku deployments, an engine published on PyPI, self-hosted analytics and error monitoring, and live metrics per component.</p>
        </article>
        <article>
          <span>06</span>
          <h3>Pragmatic AI</h3>
          <p>Free language models write the short lab reports for viewers; every move in the game stays with Laya.</p>
        </article>
      </div>
    </section>

    <section class="case-closing">
      <div class="wrap">
        <p class="eyebrow">Explore the evidence</p>
        <h2>See the system,<br /><em>not just the summary.</em></h2>
        <p>
          The live tech-stack page lists each component, its tools and live metrics: visitors, issues, commits,
          lab runs and the stream's audience.
        </p>
        <div class="case-link-row">
          <a
            class="button case-button-light"
            href="https://www.retrospeedlab.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >Open the technical overview ↗</a>
          <a
            class="case-plain-link"
            href="https://github.com/datenwissenschaften/retro-speedlab-core"
            target="_blank"
            rel="noopener noreferrer"
          >View the engine on GitHub ↗</a>
        </div>
      </div>
    </section>
  </div>
</template>
