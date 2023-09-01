---
title: Useful Links
sidebar_position: 3
---

This page is a collection of links that may come in handy during day-to-day work.

---

## Repos

- [Repository for Rancher, RKE, K3s, and RancherOS documentation](http://github.com/rancher/docs).
- [Repository for the rancher.com website](https://github.com/rancherlabs/website).
- [Repository for RKE2 documentation](https://github.com/rancher/rke2/tree/master/docs).
- [Repository for Rancher, RKE, RKE2, and K3s release-notes](https://github.com/rancherlabs/release-notes).
- [Repository for security-related issues. Often referenced during release notes work](https://github.com/rancherlabs/rancher-security/).
- [Repository for Rancher Desktop](https://github.com/rancher-sandbox/rancher-desktop).

## SUSE & Rancher doc sites

- [Production website. Corresponds to the "master" branch of the rancher/docs repo](https://rancher.com/docs).
- [Staging website. Corresponds to the "staging" branch of the rancher/docs repo](https://staging.rancher.com/docs/).
- [Project management tool](https://zube.io/rancher/ecp-docs/w/docs/kanban).
- [Website for RKE2 documentation](https://docs.rke2.io/).
- [Website for Rancher Desktop](https://rancherdesktop.io/).

## Style guides

- [Style and formatting guide](/display/RD/Style+and+formatting+guide) for Rancher docs.
- [Microsoft style guide](https://learn.microsoft.com/en-us/style-guide/welcome/) - Primarily used by Rancher docs for legacy reasons.
- [SUSE style guide](https://documentation.suse.com/style/current/single-html/docu_styleguide/) - Used as a secondary guide where the MS guide isn't relevant or doesn't have any advice.

## Learning resources

### Kubernetes-related

- **Highest level overview **[https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/](https://www.cncf.io/phippy/the-childrens-illustrated-guide-to-kubernetes/)
- **The Kubernetes Book** (learn the jargon and how to run clusters): [https://leanpub.com/thekubernetesbook](https://leanpub.com/thekubernetesbook)
- **What's the difference between K8s and K3s?**[https://traefik.io/glossary/k3s-explained/](https://traefik.io/glossary/k3s-explained/)
- **Etcd**: [https://etcd.io/docs/v3.5/faq/](https://etcd.io/docs/v3.5/faq/)
- **NGINX ingress controllers**: [NGINX Ingress controller projects](/display/~mavedon/NGINX+Ingress+controller+projects)

### Rancher

- **Rancher video course**: [https://www.crowdcast.io/e/up-and-running-rancher-october](https://www.crowdcast.io/e/up-and-running-rancher-october)
- [https://www.rancher.com/learn-the-basics](https://www.rancher.com/learn-the-basics)
- [https://community.suse.com/](https://community.suse.com/)  (Successor to Rancher Operator course is supposedly here)
- [https://www.youtube.com/@Rancher](https://www.youtube.com/@Rancher)
- [https://www.youtube.com/watch?v=fa59nQvC2S0](https://www.youtube.com/watch?v=fa59nQvC2S0)

### **Linux Foundation courses and certifications**

- **Open Source IT & Cloud Computing course**: [https://trainingportal.linuxfoundation.org/courses/fundamentals-of-open-source-it-and-cloud-computing-lfs200](https://trainingportal.linuxfoundation.org/courses/fundamentals-of-open-source-it-and-cloud-computing-lfs200)
- **Kubernetes Essentials course**: [https://trainingportal.linuxfoundation.org/courses/kubernetes-and-cloud-native-essentials-lfs250](https://trainingportal.linuxfoundation.org/courses/kubernetes-and-cloud-native-essentials-lfs250)
- **Certified Kubernetes Admin**: [https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/](https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/)

### Docs formatting

- [https://docs.github.com/en/get-started/using-git/about-git](https://docs.github.com/en/get-started/using-git/about-git)
- [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)
- [https://docusaurus.io/docs](https://docusaurus.io/docs)

## Tools

[Vale](https://vale.sh/docs/vale-cli/installation/) is a command line linter with [integrations for VS Code](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) and other text editors. It points out style issues on your page so that you can fix them before you push a commit. After you install Vale CLI, [create a .vale.ini config file](https://vale.sh/generator) to contain references to your style guides, and run`vale sync`. Then, add the integration with your text editor. When you run Vale, you should be in the same directory as .vale.ini.

Microsoft should be listed as your primary Vale style, while the [SUSE style guide for Vale](https://github.com/openSUSE/suse-vale-styleguide) should be among your supplementary styles. To add the Suse guide to your Vale styles, simply run git clone `[https://github.com/openSUSE/suse-vale-styleguide.git](https://github.com/openSUSE/suse-vale-styleguide.git)` in your styles directory and update your .vale.ini file's `BasedOnStyles` and `Packages` to list suse-vale-styleguide.

## Company resources

- [Meeting Recordings](https://web.microsoftstream.com/).
- [Support Matrix](https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.5.9/) - Supported versions for a given Rancher release [Rancher Manager Matrices](/display/PM/Rancher+Manager+Matrices)(including drafts for upcoming releases)
- [Rancher Manager and RKE2/K3s Release Dates](/pages/viewpage.action?pageId=1138196992)
- [Rancher 2 SMEs](/display/EN/Rancher+2+SMEs)
- [SUSE Account Overview](/display/SUSE/SUSE+Account+Overview) - A table listing out the different internal user accounts, and how to access them, request password resets, etc.