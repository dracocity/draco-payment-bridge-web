import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const trustLogos = ['Adobe', 'Intel', 'Atlassian', 'Notion', 'Canva', 'Unity'];

const stats = [
  {value: '40+', label: '지원 결제 네트워크'},
  {value: '180+', label: '서비스 가능 국가'},
  {value: '24/7', label: '실시간 이벤트 검증'},
  {value: '99.99%', label: '트랜잭션 처리 가용성 목표'},
];

const whoItsFor = [
  {
    title: 'SaaS',
    description:
      '구독/업그레이드/다운그레이드 시나리오를 하나의 트랜잭션 모델로 단순화합니다.',
    linkLabel: 'SaaS 시나리오 보기',
  },
  {
    title: 'Gaming',
    description:
      '웹 결제와 인게임 결제 이벤트를 통합해 단일 정산 파이프라인으로 운영합니다.',
    linkLabel: '게임 결제 흐름 보기',
  },
  {
    title: 'Digital Products',
    description:
      '일회성 결제와 정기 결제를 같은 API로 처리해 운영 오버헤드를 줄입니다.',
    linkLabel: '디지털 상품 사례 보기',
  },
];

const platformCapabilities = [
  {
    title: 'Global Payment Routing',
    description:
      'Provider별 엔드포인트, 페이로드, 인증 방식을 브릿지 계층이 통합 관리합니다.',
  },
  {
    title: 'Verification + Reconciliation',
    description:
      '서명 검증, 상태 정합성 검사, 중복 이벤트 방지로 거래 데이터 신뢰도를 확보합니다.',
  },
  {
    title: 'Subscription & Refund Ops',
    description:
      '정기 결제, 취소, 환불, 실패 재시도 같은 반복 운영 작업을 표준화된 API로 처리합니다.',
  },
  {
    title: 'Adapter-Based Extensibility',
    description:
      '신규 크립토 PG를 어댑터 형태로 추가해 기존 애플리케이션 코드를 크게 바꾸지 않고 확장합니다.',
  },
];

function HomepageMain() {
  return (
    <div className={styles.page}>
      <section className={styles.announcement}>
        New: 멀티 PG 실시간 Failover 라우팅 베타 오픈
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Draco Payment Bridge SDK</p>
          <Heading as="h1" className={styles.heroTitle}>
            Get more than a crypto payment gateway, right out of the gate.
          </Heading>
          <p className={styles.heroSubtitle}>
            여러 크립토 기반 결제 게이트웨이를 단일 SDK로 연결해 트랜잭션 처리,
            검증, 연동 운영을 표준화합니다.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Try SDK
            </Link>
          </div>
        </div>
        <aside className={styles.heroPanel}>
          <p className={styles.panelLabel}>Unified Transaction Snapshot</p>
          <div className={styles.panelRow}>
            <span>Provider</span>
            <strong>Binance Pay</strong>
          </div>
          <div className={styles.panelRow}>
            <span>Status</span>
            <strong className={styles.statusOk}>Verified</strong>
          </div>
          <div className={styles.panelRow}>
            <span>Amount</span>
            <strong>125.00 USDT</strong>
          </div>
          <div className={styles.panelRow}>
            <span>Order</span>
            <strong>ORD-9012</strong>
          </div>
          <p className={styles.panelFoot}>
            모든 Provider 이벤트가 동일한 스키마로 정규화됩니다.
          </p>
        </aside>
      </section>

      <section className={styles.trustSection}>
        <p className={styles.sectionEyebrow}>Trusted by digital-first teams</p>
        <div className={styles.logoRow}>
          {trustLogos.map((name) => (
            <span key={name} className={styles.logoPill}>
              {name}
            </span>
          ))}
        </div>
        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <article key={item.label} className={styles.statCard}>
              <p className={styles.statValue}>{item.value}</p>
              <p className={styles.statLabel}>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.useCaseSection}>
        <p className={styles.sectionEyebrow}>Who Draco serves</p>
        <Heading as="h2" className={styles.sectionTitle}>
          제품군이 달라도 결제 운영은 하나의 표준으로
        </Heading>
        <div className={styles.useCaseGrid}>
          {whoItsFor.map((item) => (
            <article key={item.title} className={styles.useCaseCard}>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p className={styles.cardDescription}>{item.description}</p>
              <Link to="/docs/intro" className={styles.inlineLink}>
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.platformSection}>
        <p className={styles.sectionEyebrow}>Explore platform capabilities</p>
        <Heading as="h2" className={styles.sectionTitle}>
          결제 복잡도는 줄이고, 글로벌 확장 속도는 높입니다
        </Heading>
        <div className={styles.platformGrid}>
          {platformCapabilities.map((item) => (
            <article key={item.title} className={styles.platformCard}>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p className={styles.cardDescription}>{item.description}</p>
              <Link to="/docs/intro" className={styles.inlineLink}>
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.developerSection}>
        <article className={styles.devCard}>
          <p className={styles.sectionEyebrow}>Made for developers</p>
          <Heading as="h2" className={styles.sectionTitle}>
            All-code or low-code, your choice
          </Heading>
          <p className={styles.cardDescription}>
            SDK + Webhook + Adapter 템플릿을 활용해 빠르게 연동하거나, 세부
            정책을 코드로 직접 제어할 수 있습니다.
          </p>
          <pre className={styles.codeBlock}>
            <code>
              {`const bridge = new PaymentBridge({
  providers: [binancePay(), bitPay(), customProvider()],
});

const tx = await bridge.createCharge({
  merchantId: "m_2026",
  amount: "125.00",
  currency: "USDT",
  orderId: "ORD-9012",
});

await bridge.verifyWebhook(signature, payload);
await bridge.syncTransaction(tx.id);`}
            </code>
          </pre>
        </article>
      </section>

      <section className={styles.bottomCta}>
        <p className={styles.bottomSubtitle}>
          Ready to get started?
        </p>
        <Heading as="h2" className={styles.bottomTitle}>
          Draco로 멀티 크립토 결제 운영을 시작하세요
        </Heading>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Try SDK
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Draco Payment Bridge SDK"
      description="여러 크립토 결제 PG를 단일 SDK로 통합하는 결제 브릿지 솔루션">
      <main>
        <HomepageMain />
      </main>
    </Layout>
  );
}
