---
sidebar_position: 4
title: Technical
---

<!-- 

## CDN

| NO. | Source | Target |
| --- | --- | --- |
| 1 | COS 的回源是什么功能？ | What is COS origin-pull? |  |
| 2 | 回源功能可实现当用户访问 COS 上不存在的文件时，让 COS 到用户指定的源站（可以是本地 IDC，或者是其他云厂商的对象所在源站、存储桶等）拉取数据。 | COS origin-pull is a feature that allows you to pull data from a specific origin server (e.g., a local IDC, or an origin server or a bucket of other cloud vendors) when the requested data is not stored in COS. |  |
| 3 | 设置回源主要用于数据的热迁移、特定请求的重定向等场景，您可以按照自身实际需要进行设置。操作指引请参见 设置回源。 | Origin-pull is mainly used to migrate hot data and redirect certain requests. You can configure it as needed. For detailed directions, please see _Setting Origin-Pull_. |  |
| 4 | 设置回源规则后，当您请求的对象在存储桶中不存在时，可以通过回源规则从设定的源地址获取到正确的数据，然后再返回给用户。或者是需要对特定的请求进行重定向时，可以通过回源规则从 COS 访问到源站对应的数据。 | After an origin-pull rule is set, if the requested object does not exist in the bucket, it will be pulled from the origin server configured in the origin-pull rule and returned to the client. Besides, when you need to redirect specific requests, the origin-pull rule allows COS to access data stored in the origin server. |  |
| 5 | 客户端怎么确认请求 COS 时进行了回源操作？ | How can a client know whether a COS request pulls data from an origin server? |  |
| 6 | 如果是异步回源，在设置回源后第一次请求 COS 会返回302状态码，客户端发起第二次请求时将链接至源站。如果是同步回源，COS 会从源站拉取数据并实时返回给客户端，同时 COS 会将数据转存一份到底层服务器上。 | If the pull is asynchronous, COS will return 302 to the client for the first request after origin-pull is configured, and forward the client’s second request to the origin server. If the pull is synchronous, COS will pull data from the origin server in real time and return it to the client, and also save the data to the COS server. |  |
| 7 | 回源地址的作用是什么？ | What is an origin-pull address for? |  |
| 8 | 回源地址用于指定您需要拉取的数据的存储地址，一般为 IP 或者域名。当 COS 上没有用户想访问的资源时，将通过回源地址实时拉取资源。 | An origin-pull address is usually an IP or a domain name. It specifies where the data you need to pull is stored. When COS does not have the resource you request, the origin-pull address will be used to pull the resource in real time. |  |
| 9 | 设置回源后，当 COS 上不存在回源地址所对应的资源或路径时，COS 会在用户首次访问后自动上传资源和创建路径吗？ | After origin-pull is configured, if COS does not have the resource/path that the origin server address has, will COS automatically upload the requested resource to COS and create the same path after the client's initial access? |  |
| 10 | 会，COS 会自动拉取资源并创建路径。 | Yes. COS will pull the resource automatically and create the path. |  |

 -->

## Media

| NO. | Source | Target |
| --- | --- | --- |
| 1 | **访问视频时无法正常播放** | **Video Cannot be Played** |
| 2 | 现象描述 | Symptoms |
| 3 | 播放视频时，无法正常播放。例如，视频只有声音没有画面，只有画面没有声音，甚至无法播放等问题。 | The uploaded video cannot be played normally (for example, the video has sound only, has no sound, or cannot be played at all). |
| 4 | **可能原因** | **Possible Causes** |
| 5 | 1. 原视频的编码格式有问题。 | 1. The codec of the original video is not supported. |
| 6 | 2. 原视频被损坏，导致上传视频后存在播放时只有声音或只有画面，甚至无法播放等问题。 | 2. The original video is corrupted, causing the video only has sound but no picture (or the other way around), or even cannot be played at all. |
| 7 | 处理步骤 | Troubleshooting Procedure |
| 8 | 1. 检查原视频的编码格式是否正确。 | 1. Check whether the codec of the original video is supported. |
| 9 | 是，请执行下一步。否，请上传正确编码格式的视频。具体要求请参考**规格与限制**。 | If yes, proceed with the next step. If not, upload a video with a supported codec. For more information, please see **Rules and Limits**. |
| 10 | 2. 使用 VLC 等专业播放器检查原视频是否可以正常播放。 | 2. Check whether the original video can be played using VLC or other professional players. |
| 11 | 是，请**联系我们**。否，建议使用腾讯云的转码产品尝试修复原视频。详情请参考**视频转码**。 | If yes, please **contact us**. If not, you can use Tencent Cloud's transcoding service to fix the video. For more information, please see **Video Transcoding**. |

## FAQs

| NO. | Source | Target |
| --- | --- | --- |
| 1 | 版本控制问题 | Versioning |
| 2 | 误删除数据能否找回？ | Can I restore accidentally deleted data? |
| 3 | 人为误删文件目前暂不支持找回。您可以启用存储桶版本控制功能，在存储桶中存放对象的多个版本，并且可以对指定版本的对象进行检索、删除或还原。这有助于恢复被用户误删或应用程序故障而丢失的数据。详情请参见[设置版本控制]。 | No. However, you can enable versioning for your bucket so that you can store multiple versions of an object in a bucket, and extract, delete, or restore a specific object version. Versioning allows you to restore data lost due to accidental deletion or application failures. For more information, please see [Setting Versioning]. |
| 4 | 对象存储如何解决数据容灾问题？ | What is COS’s solution to disaster recovery? |
| 5 | 对象存储可通过以下方式实现容灾： | You can achieve disaster recovery in COS by: |
| 6 | 1. 开启[版本控制]，版本控制用于实现在相同存储桶中存放同一对象的多个版本，版本控制设置方式请参见[版本控制配置]。 | 1. Enabling [versioning], which allows you to store multiple versions of an object in the bucket. For detailed directions, please see [Versioning Configuration]. |
| 7 | 2. 使用[存储桶复制] 实现异地容灾，详情请参见[存储桶复制配置]。 | 2. Using [cross-bucket replication] to achieve remote disaster recovery. For more information, please see [Cross-Bucket Replication Configuration]. |
| 8 | 对象存储 COS 存储桶开启版本控制后，怎么删除历史版本数据？ | How can I delete noncurrent object versions after I enable versioning for a bucket? |
| 9 | 删除历史版本文件，可以通过[生命周期] 开启`管理历史版本对象`的选项，沉降或者删除历史版本对象。 | You can [set a lifecycle rule] and enable `Manage Historical Versions` to transition or delete noncurrent object versions. |
| 10 | 对象存储可以设置上传同名文件不覆盖吗？ | Can a newly uploaded object not overwrite the old one that has the same name? |
| 11 | COS 上传同名文件默认会覆盖。您可以启用存储桶[版本控制功能]，在存储桶中存放对象的多个版本。关于版本控制的更多介绍，请参见[版本控制概述]。 | No. By default, the old object will be overwritten by the new one. However, you can enable [versioning] so that multiple object versions can be preserved. For more information, please see [Versioning Overview]. |
| 12 | COS 怎么下载到指定的版本号的文件？ | How can I download a specific version of object? |
| 13 | 如果您使用 API 接口或 SDK 下载文件，可通过添加请求参数 versionId 来实现，API 详细操作请查看 [GET Object] 文档。 | If you download with APIs or SDKs, add the `versionId` request parameter. For the API calling directions, see [GET Object]. |
| 14 | 如果您通过控制台下载文件，需要在顶部导航栏中将历史版本状态设置为`显示`，即可下载您所需要的文件。 | If you download via the console, set the historical versions to `Display` in the top navigation bar so that you can download the desired object version. |
| 15 | COS 如何批量删除历史版本文件？ | How can I delete noncurrent object versions in batches? |
| 16 | 您可以使用 COSBrowser 工具，一键删除存储桶中的历史版本文件。详情请参见 [COSBrowser 桌面端使用说明]。 | You can use the COSBrowser tool to one-click delete noncurrent object versions in batches. For more information, please see [COSBrowser User Guide for Desktop Version]. |
| 17 | 您还可以通过[设置生命周期策略] 实现。在配置生命周期策略时，关闭管理当前版本文件，开启管理历史版本，设置文件修改1天后删除。 | You can also [configure a lifecycle policy] to delete objects that were modified more than 1 day ago for noncurrent object versions. |
| 18 | 跨地域复制问题 | Cross-Bucket Replication |
| 19 | 对象存储开启跨地域复制，复制时走内网还是公网？ | Does cross-bucket replication use a private or public network? |
| 20 | 对象存储的跨地域复制功能默认使用内网进行复制。 | By default, cross-bucket replication uses a private network. |
| 21 | \>? 使用跨地域复制功能会产生相应的跨地域复制流量费用，目前还没有相应的资源包，产生的费用将会在次日0点进行结算从账户余额中扣除。 | \>? Note that cross-bucket replication incurs traffic fees, which cannot be redeemed with a resource pack yet. The fees incurred will be deducted from your account at 00:00 the next day. |
| 22 | 两个地域的 COS 资源可以同步吗？ | Can I sync resources between two regions? |
| 23 | 同一账号下的两个地域的 COS 资源可以通过配置跨地域复制功能实现增量复制。详情请参见[设置跨地域复制]。 | Yes. Resources under the same account can be synced between two regions. You can [set cross-bucket replication] to replicate objects incrementally. |
| 24 | 如何快速将一个账号下的 COS 资源迁移（或复制）到另一个账号下的 COS 中？ | How to quickly migrate resources from one account to another account? |
| 25 | 数据迁移可通过 COSMigration 工具实现存储桶之间的迁移，可参见 [COS Migration 工具]。也可通过配置跨地域复制实现存储桶之间的资源复制，可参见[设置存储桶复制]。 | You can use [COS Migration] to migrate data between buckets. Alternatively, you can [set cross-bucket replication]. |
| 26 | 跨地域复制能力是否支持复制存量数据？ | Does cross-bucket replication support replicating existing data? |
| 27 | 跨地域复制能力不支持复制存量数据。如果您需要复制存量数据，您可以参见[批量处理] 文档，批量复制您的存量数据。 | No. You can use [Batch Operation] instead. |
| 28 | 数据加密问题 | Data Encryption |
| 29 | COS 支持文件加密吗？ | Does COS support data encryption? |
| 30 | COS 支持存储桶加密、对象加密等文件加密方式。存储桶加密操作指引请参见[设置存储桶加密] 文档，对象加密可参见[设置对象加密] 文档。 | Yes. COS supports encryption such as bucket encryption and object encryption. For more information, please see [Setting Bucket Encryption] and [Setting Object Encryption]. |
| 31 | COS 文件加密是否会影响性能？ | Does COS encryption affect performance? |
| 32 | 文件加密需要用客户侧密钥，或者 COS 托管密钥，或者 KMS 密钥将文件内容加密成密文，因此会有一定的性能损耗，主要体现在访问延迟增加。这一延迟增加对大文件读写影响不明显，但在小文件读写中会有一定影响。 | A client-side/COS-managed/KMS key is used to encrypt the file content into ciphertext, which affects performance to some extent (mainly by increasing access delay). The delay does not significantly affect large object reads/writes, but has a certain impact on small object reads/writes. |
| 33 | 加密文件如何获取？ | How can I get an encrypted object? |
| 34 | 如果您的文件已经加密，那么您在读取文件时需要携带加密头部才能获取文件。不同加密算法的加密头部不一样，具体说明可参见[服务端加密头部]。 | To get an encrypted object, include an encryption header when requesting it. The encryption header differs according to the encryption algorithm. For more information, please see [Common Request Headers]. |
| 35 | 其他问题 | Other |
| 36 | 请问 COS 的标准存储，低频存储，归档存储数据都有备份吗？ | Are there backups for the STANDARD, STANDARD_IA, and ARCHIVE storage classes? |
| 37 | COS 的数据通过多副本或纠删码方式在底层存储，分布式存储引擎在一个地域的多个可用区中分布，可靠性99.999999999%，多副本和纠删码存储是底层逻辑，对用户不可见。 | COS data is stored at the underlying layer using multiple replicas or erasure coding (both are imperceptible to users). The storage engines are distributed across multiple availability zones in a region, making the data reliability 99.999999999%. |