'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { coffee, training, water } from '@/lib/site';
import Reveal from './Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = (gap: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const lightUp: Variants = {
  hidden: { opacity: 0.35, borderColor: '#3a3f47' },
  show: { opacity: 1, borderColor: '#c6f432', transition: { duration: 0.4 } },
};

const inViewOnce = { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-80px' } } as const;

// Counts from 0 to `to` the first time it scrolls into view. The static HTML
// holds the final value, so crawlers and no-JS visitors see the real number.
function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px 120px 0px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.4, ease, onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  );
}

function JobHeader({ left, right, rightLime = false }: { left: string; right: string; rightLime?: boolean }) {
  return (
    <div className="flex flex-wrap justify-between gap-3 font-mono text-[13px]">
      <p className="text-muted">{left}</p>
      <p className={rightLime ? 'text-lime' : 'text-muted'}>{right}</p>
    </div>
  );
}

function Dag() {
  const nodes = [
    { href: '#water', label: 'house_water_etl' },
    { href: '#coffee', label: 'brew_log' },
    { href: '#training', label: 'training_metrics' },
  ];
  return (
    <motion.div
      {...inViewOnce}
      variants={stagger(0.35)}
      className="mb-16 flex flex-wrap items-center gap-3 font-mono text-sm"
    >
      {nodes.map((n, i) => (
        <Fragment key={n.href}>
          {i > 0 && <span aria-hidden="true" className="pipe inline-block h-0.5 w-12" />}
          <motion.a
            variants={lightUp}
            href={n.href}
            className="rounded-lg border px-4 py-3 text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            {n.label}
          </motion.a>
        </Fragment>
      ))}
      <motion.span variants={rise} className="ml-2 text-muted">
        ● all tasks succeeded
      </motion.span>
    </motion.div>
  );
}

function WaterJob() {
  return (
    <Reveal>
      <div id="water" className="mb-6 scroll-mt-24 rounded-[20px] border border-line bg-panel p-6 md:p-12">
        <JobHeader left="job 01 · house_water_etl · DIY" right={`● running since ${water.since}`} rightLime />
        <h3 className="mt-3 mb-3 text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.03em]">
          The only pipeline I&apos;ve built with real pipes
        </h3>
        <p className="mb-10 max-w-[720px] text-lg leading-relaxed text-fg-2">
          I installed a whole-house 3-stage filtration system and a water softener in my townhouse
          myself. Turns out my B.Tech in Chemical Engineering was training for this all along.{' '}
          {water.hardestPart}
        </p>

        <motion.ol
          {...inViewOnce}
          variants={stagger(0.18)}
          aria-label="Water flow, from city main to taps"
          className="flex flex-col font-mono md:flex-row md:items-center"
        >
          {water.stages.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && (
                <li aria-hidden="true" className="flex shrink-0 md:block">
                  <span className="pipe-v ml-6 block h-6 w-0.5 md:hidden" />
                  <span className="pipe hidden h-0.5 w-8 md:block" />
                </li>
              )}
              <motion.li
                variants={rise}
                className={`min-w-0 flex-1 rounded-xl p-4 ${
                  s.kind === 'sink'
                    ? 'bg-lime text-ink'
                    : s.kind === 'source'
                      ? 'border border-line-2'
                      : 'border border-lime'
                }`}
              >
                <p className={`mb-1.5 text-xs ${s.kind === 'stage' ? 'text-lime' : s.kind === 'sink' ? '' : 'text-muted'}`}>
                  {s.label}
                </p>
                <p className={`text-base ${s.kind === 'sink' ? 'font-medium' : ''}`}>{s.name}</p>
              </motion.li>
            </Fragment>
          ))}
        </motion.ol>

        <div className="mt-8 flex flex-wrap gap-3">
          {water.photos.map((p) => (
            <div
              key={p}
              className="flex aspect-video flex-[1_1_260px] items-center justify-center rounded-xl border border-dashed border-line-2 bg-panel-2 font-mono text-[13px] text-muted"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function CoffeeJob() {
  return (
    <Reveal className="min-w-0">
      <div id="coffee" className="flex h-full scroll-mt-24 flex-col gap-5 rounded-[20px] border border-line bg-panel p-6 md:p-10">
        <JobHeader left="job 02 · brew_log" right="upstream: house_water_etl ✓" />
        <h3 className="text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.03em]">Coffee, taken seriously</h3>

        <motion.div
          {...inViewOnce}
          variants={stagger(0.12)}
          className="overflow-x-auto rounded-xl border border-line bg-ink p-5 font-mono text-sm leading-[1.7]"
        >
          <motion.p variants={rise} className="whitespace-nowrap">
            <span className="text-lime">SELECT</span> method, dose, yield, time
          </motion.p>
          <motion.p variants={rise} className="whitespace-nowrap">
            <span className="text-lime">FROM</span> brew_log
          </motion.p>
          <motion.p variants={rise} className="mb-4 whitespace-nowrap">
            <span className="text-lime">ORDER BY</span> cups_per_week <span className="text-lime">DESC</span>;
          </motion.p>
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-muted">
                {['method', 'dose', 'yield', 'time'].map((h) => (
                  <th key={h} className="border-b border-line py-2 pr-3 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coffee.brews.map((b) => (
                <motion.tr key={b.method} variants={rise} className="border-b border-line last:border-0">
                  <td className="py-2.5 pr-3">{b.method}</td>
                  <td className="py-2.5 pr-3">{b.dose}</td>
                  <td className="py-2.5 pr-3">{b.yield}</td>
                  <td className="py-2.5">{b.time}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <motion.p variants={rise} className="mt-4 text-muted">
            {coffee.brews.length} rows · current beans: {coffee.beans}
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap gap-2 font-mono text-[13px]">
          <span className="rounded-full border border-line-2 px-3 py-1.5">grinder: {coffee.grinder}</span>
          <span className="rounded-full border border-line-2 px-3 py-1.5">machine: {coffee.machine}</span>
        </div>
      </div>
    </Reveal>
  );
}

function TrainingJob() {
  const ratio = training.benchLb / training.bodyweightLb;
  const kpis = [
    { label: 'bench 1RM', value: <CountUp to={training.benchLb} />, unit: 'lb' },
    { label: '5K', value: <>&lt;{training.fiveKUnderMin}</>, unit: 'min' },
    { label: 'longest run', value: <CountUp to={training.longestRunKm} />, unit: 'km' },
  ];

  return (
    <Reveal className="min-w-0" delay={0.1}>
      <div id="training" className="flex h-full scroll-mt-24 flex-col gap-5 rounded-[20px] border border-line bg-panel p-6 md:p-10">
        <JobHeader left="job 03 · training_metrics" right="upstream: brew_log ✓" />
        <h3 className="text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.03em]">
          Hybrid athlete: lift heavy, run far
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {kpis.map((k) => (
            <div key={k.label} className="min-w-0 rounded-xl border border-line bg-ink p-4">
              <p className="mb-2 font-mono text-xs text-muted">{k.label}</p>
              <p className="text-4xl font-bold tracking-[-0.03em] text-lime">
                {k.value}
                <span className="text-base font-normal text-fg"> {k.unit}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-line bg-ink p-5 font-mono text-[13px]">
          <div className="mb-2.5 flex flex-wrap justify-between gap-3">
            <span className="text-muted">strength-to-weight · bench ÷ bodyweight</span>
            <span>
              {training.benchLb} / {training.bodyweightLb} ={' '}
              <span className="text-lime">
                <CountUp to={ratio} decimals={2} />×
              </span>
            </span>
          </div>
          <div
            role="meter"
            aria-label="Bench press to bodyweight ratio"
            aria-valuemin={0}
            aria-valuemax={2}
            aria-valuenow={Number(ratio.toFixed(2))}
            className="h-2.5 overflow-hidden rounded-full bg-line"
          >
            <motion.div
              className="h-full rounded-full bg-lime"
              initial={{ width: '0%' }}
              whileInView={{ width: `${(ratio / 2) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />
          </div>
          <div className="mt-2 flex justify-between text-muted">
            <span>0×</span>
            <span>1×</span>
            <span>2×</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-line-2 p-4 font-mono text-[13px] text-muted">
          <span>source: strava</span>
          <span>weekly mileage + recent runs · syncing soon</span>
        </div>

        <p className="text-[17px] leading-relaxed text-fg-2">
          Benching more than {ratio.toFixed(1)}× bodyweight and still running a 15K. {training.nextGoal}
        </p>
      </div>
    </Reveal>
  );
}

export default function OffHours() {
  return (
    <section id="off-hours" className="border-y border-line bg-ink-2">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-[clamp(40px,6vw,80px)] font-bold tracking-[-0.04em]">Off-hours pipelines</h2>
            <span className="font-mono text-sm text-muted">dag: life_v1 · schedule: daily</span>
          </div>
          <p className="mb-10 max-w-[640px] text-xl leading-normal text-fg-2">
            Outside work I run three jobs. They depend on each other: clean water makes better
            coffee, and coffee fuels the training.
          </p>
        </Reveal>

        <Dag />
        <WaterJob />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CoffeeJob />
          <TrainingJob />
        </div>
      </div>
    </section>
  );
}
