export const data = [
  {
    key: 'users',
    value: JSON.stringify([
      'lain'
    ])
  },

  {
    key: 'user:lain',
    value: JSON.stringify({
      sents: [],
      drafts: [],
      messages: [
        'a9a137c2-6127-49c5-97e9-22079bcec278'
      ],
      account: {
        user: 'lain',
        display: 'Iwakura Lain',
        domains: [
          'lain.im'
        ],
        // raw password is 'lain'
        passwordHash: '$2a$10$tgtUqmAixZ/wjAP5RcQ2t.6Jw.SI9v6wVM3nI0Xq1a6DidkgIsngu'
      }
    })
  },

  {
    key: 'message:lain:a9a137c2-6127-49c5-97e9-22079bcec278',
    value: JSON.stringify({
      id: 'a9a137c2-6127-49c5-97e9-22079bcec278',
      date: '2023-07-21T12:06:01.916Z',
      subject: 'ニコニコ登録案内メール',
      headers: {
        'content-language': 'en-US',
        'content-transfer-encoding': 'base64',
        'content-type': 'text/plain; charset=UTF-8',
        'dkim-signature': 'v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=hzpqopno5yw5xismcf4zscglxy5huoyn; d=nicovideo.jp; t=1689941159; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Message-ID:Date; bh=0RwqgPEqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=h/Z85jC5YfRSxty5gJjWbCNttBw4I8qqFISxVay0xSN4zcjKQCa8l8JtWLmXTttl 37ton7jsY9YPY8UJ/ockJg6HhvjrkLB2ZDaM6ckXblzBUqOpC0dKdo1fSJAb1XGrMl3 tbtCHpEFb3A2IgjtqXpfoZ41qRPd/+S50ZImaL2w=, v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=zh4gjftm6etwoq6afzugpky45synznly; d=amazonses.com; t=1689941159; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Message-ID:Date:Feedback-ID; bh=0RwqgPEqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=ItXso5Rm8AW6WtCt7BvNm6t1bOhQ1VRpdGos51th1wXivG22X8Xou8xZpqr9t8lG D25T7wa1mpZywG85U4V1dcxF8JxGSb6+X3GdnpQiT6Btl3pxwXYJ08M24SkfORfPLyK xhh7xYQ+mXleU+61i4/ebYoi66POXLqjwAXvxQN4=',
        'feedback-id': '1.ap-northeast-1.eJEzhQdM3sUuLXbCWj4AGCNzZSGT9Sy44Dd6zn1Cb6k=:AmazonSES',
        'message-id': '<010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com>',
        'mime-version': '1.0',
        'x-ses-outgoing': '2023.07.21-23.251.235.151',
        date: 'Fri, 21 Jul 2023 12:05:59 +0000',
        to: 'admin@lain.im',
        from: '\"niconico\" <account@nicovideo.jp>',
        subject: 'ニコニコ登録案内メール'
      },
      from: {
        name: '\"niconico\" <account@nicovideo.jp>',
        addr: '010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com',
      },
      to: [{
        name: 'admin@lain.im',
        addr: 'admin@lain.im',
      }],
      eml: 'Received: from e235-151.smtp-out.ap-northeast-1.amazonses.com (23.251.235.151)\r\n        by email.cloudflare.net (unknown) id BKRuGHR6jE2o\r\n        for <admin@lain.im>; Fri, 21 Jul 2023 12:06:00 +0000\r\nReceived-SPF: pass (mx.cloudflare.net: domain of 010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com designates 23.251.235.151 as permitted sender)\r\n   helo=\"e235-151.smtp-out.ap-northeast-1.amazonses.com\"; envelope-from=\"010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com\";\r\nAuthentication-Results: mx.cloudflare.net; spf=pass; dkim=pass; dmarc=none;\r\nARC-Seal: i=1; a=rsa-sha256; s=2022; d=email.cloudflare.net; cv=none;\r\n\tb=VsS4YhYB99uMW1F3Pt7J2F4GPg2+uYQEmlVh601cUY2dIk1T9mI749HSNNMJ4YpjXmMplnI6x\r\n\tZGSLaI8oZG7pVC/I/0uJsR0eyUtHzwZy4INqFzlHlcqNfANiTE8xnfXJcyQ7rWDZGq2vYVp5/f2\r\n\t2XjKtbT9II6M10GR/hhwJmUpuFDiIXORD1kG8JgZyfGJZ3X1y24zURn9JbYRpnF9Mmhpwq2ywB7\r\n\tl9jdvWJ1pp9gCz/wS3tQ/VfbZIyCmm1hOf+sC6oDeHvKn20cDjdL9y636DQBKEoC+hgmkv1fofn\r\n\tI0+xgNY+1OQxxDzBfsKNkypfAMZPjm6dJW/qkdNNnqIQ==;\r\nARC-Message-Signature: i=1; a=rsa-sha256; s=2022; d=email.cloudflare.net; c=relaxed/relaxed;\r\n\th=Date:Subject:To:From:reply-to:cc:resent-date:resent-from:resent-to\r\n\t:resent-cc:in-reply-to:references:list-id:list-help:list-unsubscribe\r\n\t:list-subscribe:list-post:list-owner:list-archive; t=1689941161; bh=0RwqgPE\r\n\tqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=VSZtRgqnzv4sh1Q4Hg85fMx256sdlDs4JH\r\n\teF9jknZHaDybG9adFJx/nnQPsYtmuFF4SDTRNQ6A7hrcCUtIgIaq3LUxnydvGEM1UG7di86zypO\r\n\tLxivsekZpEE2Rb2c6kBL1kUbDfqANXmrklXI1GtY7pMvGWFtRVI+EQj2sV3g4bUvNxFxM+sOofS\r\n\tcu8un2cN1D/JVC+emh05FUy+Hj2Tju3GCebro1q7WzREpKeMfeIvDnTxP87EtPrWyfvBEvdyX0K\r\n\thIQjUxr0MUH45iFLUvp5EarYYIhOqe/ViHDH2SyDV8kroRngw7IbFLfxrvojGcE/YtJhgwtaEtE\r\n\t3mfcHI/A==;\r\nARC-Authentication-Results: i=1; mx.cloudflare.net;\r\n\tdkim=pass header.d=nicovideo.jp header.s=hzpqopno5yw5xismcf4zscglxy5huoyn header.b=h/Z85jC5;\r\n\tdkim=pass header.d=amazonses.com header.s=zh4gjftm6etwoq6afzugpky45synznly header.b=ItXso5Rm;\r\n\tdmarc=none header.from=nicovideo.jp policy.dmarc=none;\r\n\tspf=pass (mx.cloudflare.net: domain of postmaster@e235-151.smtp-out.ap-northeast-1.amazonses.com designates 23.251.235.151 as permitted sender) smtp.helo=e235-151.smtp-out.ap-northeast-1.amazonses.com;\r\n\tspf=pass (mx.cloudflare.net: domain of 010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com designates 23.251.235.151 as permitted sender) smtp.mailfrom=010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com;\r\n\tarc=none smtp.remote-ip=23.251.235.151\r\nDKIM-Signature: v=1; a=rsa-sha256; s=2022; d=email.cloudflare.net; c=relaxed/relaxed;\r\n\th=Date:Subject:To:From:reply-to:cc:resent-date:resent-from:resent-to\r\n\t:resent-cc:in-reply-to:references:list-id:list-help:list-unsubscribe\r\n\t:list-subscribe:list-post:list-owner:list-archive; t=1689941161; bh=0RwqgPE\r\n\tqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=Fzbj5GIDwcXWDG9mx6s340qFvodlXBpnhK\r\n\tKoEOagfhTWU86Yi0DFum5fcYmX8oMmoqFaP6nVFSn3NUBXcCgyihbDyrwJ+BbEoEX6MNkY4CxrZ\r\n\ttazvVpEj5+8HRKKE1GAfJrUhVziryPU+WpI3vGZx94lTEplhLPiW/sd8+rI37gcmvgmyx2KElgo\r\n\tuvY/hfn9R3RRlVEjJ8/IkEei3TsmpN7ov/EgNv4HjiBWYAQgchplQAJIUfRpmafoHLcLUmQL6og\r\n\tR3p4uz4/9o8elPL2VnJRnVzeoNpWZOHOzvRbuxQZ9XIE+mpfWwwsLv0577G9WqfLjPS65Rbhb01\r\n\toP/8ZUdw==;\r\nDKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple;\r\n\ts=hzpqopno5yw5xismcf4zscglxy5huoyn; d=nicovideo.jp; t=1689941159;\r\n\th=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Message-ID:Date;\r\n\tbh=0RwqgPEqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=;\r\n\tb=h/Z85jC5YfRSxty5gJjWbCNttBw4I8qqFISxVay0xSN4zcjKQCa8l8JtWLmXTttl\r\n\t37ton7jsY9YPY8UJ/ockJg6HhvjrkLB2ZDaM6ckXblzBUqOpC0dKdo1fSJAb1XGrMl3\r\n\ttbtCHpEFb3A2IgjtqXpfoZ41qRPd/+S50ZImaL2w=\r\nDKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple;\r\n\ts=zh4gjftm6etwoq6afzugpky45synznly; d=amazonses.com; t=1689941159;\r\n\th=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Message-ID:Date:Feedback-ID;\r\n\tbh=0RwqgPEqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=;\r\n\tb=ItXso5Rm8AW6WtCt7BvNm6t1bOhQ1VRpdGos51th1wXivG22X8Xou8xZpqr9t8lG\r\n\tD25T7wa1mpZywG85U4V1dcxF8JxGSb6+X3GdnpQiT6Btl3pxwXYJ08M24SkfORfPLyK\r\n\txhh7xYQ+mXleU+61i4/ebYoi66POXLqjwAXvxQN4=\r\nFrom: niconico <account@nicovideo.jp>\r\nTo: admin@lain.im\r\nSubject: =?utf-8?B?44OL44Kz44OL44Kz55m76Yyy5qGI5YaF44Oh44O844Or?=\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\nMessage-ID: <010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com>\r\nDate: Fri, 21 Jul 2023 12:05:59 +0000\r\nFeedback-ID: 1.ap-northeast-1.eJEzhQdM3sUuLXbCWj4AGCNzZSGT9Sy44Dd6zn1Cb6k=:AmazonSES\r\nX-SES-Outgoing: 2023.07.21-23.251.235.151\r\n\r\nCuODi+OCs+ODi+OCs+OBuOOCiOOBhuOBk+OBne+8gQoKCuS4i+iomOOBrlVSTOOBq+OCouOCr+OC\r\nu+OCueOBl+OBpuOAgeeZu+mMsuOCkuOBiumhmOOBhOOBl+OBvuOBmeOAggoKCmh0dHBzOi8vYWNj\r\nb3VudC5uaWNvdmlkZW8uanAvcmVnaXN0ZXIvcHJvZmlsZT90b2tlbj00Mzc0OTBhNzhiODdiNTg0\r\nYzM2N2RiNTllMWE0Mzc3ZmM4YWQ0ZjkxNGZmYzJjNTU2OTFkOTEzNDY2ODg2M2YyCgrnmbvpjLLl\r\nrozkuoblvozjgIHnmbvpjLLjgZfjgZ/jg6Hjg7zjg6vjgqLjg4njg6zjgrnjgajjg5Hjgrnjg6/j\r\ng7zjg4njgafjgIHjg4vjgrPjg4vjgrPjgavjg63jgrDjgqTjg7PjgZnjgovjgZPjgajjgYzjgafj\r\ngY3jgb7jgZnjgIIKCgrigLvjgZPjga7jg6Hjg7zjg6vjgavlv4PjgYLjgZ/jgorjgYzjgarjgYTl\r\noLTlkIjjga/jgIHjgZPjga7jg6Hjg7zjg6vjga/noLTmo4TjgZfjgabjgY/jgaDjgZXjgYTjgIIK\r\nCgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t\r\nLS0tLS0tLS0tLS0tLS0K4oC744GT44Gu44Oh44O844Or44Gv5qCq5byP5Lya56S+44OJ44Ov44Oz\r\n44K044GL44KJ44OL44Kz44OL44Kz44Gr55m76Yyy44GV44KM44Gm44GE44KL44Oh44O844Or44Ki\r\n44OJ44Os44K55a6b44Gr6YCB5L+h44GX44Gm44GE44G+44GZ44CCCuKAu+mFjeS/oeWwgueUqOOB\r\nruOCouODieODrOOCueOBruOBn+OCgei/lOS/oeOBmeOCi+OBk+OBqOOBr+OBp+OBjeOBvuOBm+OC\r\nkwotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t\r\nLS0tLS0tLS0tLS0tLS0K4pag44OL44Kz44OL44Kz44OY44Or44OXCmh0dHBzOi8vcWEubmljb3Zp\r\nZGVvLmpwLz9zaXRlX2RvbWFpbj1kZWZhdWx0CgrpgYvllrbkvJrnpL7vvJrmoKrlvI/kvJrnpL7j\r\ng4njg6/jg7PjgrTvvIhodHRwczovL2R3YW5nby5jby5qcC/vvIkK6YCj57Wh5YWI44CA77ya44CS\r\nMTA0LTAwNjHjgIDmnbHkuqzpg73kuK3lpK7ljLrpioDluqflm5vkuIHnm64xMueVqjE15Y+344CA\r\n5q2M6Iie5LyO5bqn44K/44Ov44O8CuKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKU\r\ngOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKU\r\ngOKUgOKUgOKUgOKUgAogKEMpIERXQU5HTyBDby4sIEx0ZC4KCgo=\r\n',
      email: {
        headers: [
          {
            key: "received",
            value: "from e235-151.smtp-out.ap-northeast-1.amazonses.com (23.251.235.151) by email.cloudflare.net (unknown) id BKRuGHR6jE2o for <admin@lain.im>; Fri, 21 Jul 2023 12:06:00 +0000"
          },
          {
            key: "received-spf",
            value: "pass (mx.cloudflare.net: domain of 010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com designates 23.251.235.151 as permitted sender) helo=\"e235-151.smtp-out.ap-northeast-1.amazonses.com\"; envelope-from=\"010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com\";"
          },
          {
            key: "authentication-results",
            value: "mx.cloudflare.net; spf=pass; dkim=pass; dmarc=none;"
          },
          {
            key: "arc-seal",
            value: "i=1; a=rsa-sha256; s=2022; d=email.cloudflare.net; cv=none; b=VsS4YhYB99uMW1F3Pt7J2F4GPg2+uYQEmlVh601cUY2dIk1T9mI749HSNNMJ4YpjXmMplnI6x ZGSLaI8oZG7pVC/I/0uJsR0eyUtHzwZy4INqFzlHlcqNfANiTE8xnfXJcyQ7rWDZGq2vYVp5/f2 2XjKtbT9II6M10GR/hhwJmUpuFDiIXORD1kG8JgZyfGJZ3X1y24zURn9JbYRpnF9Mmhpwq2ywB7 l9jdvWJ1pp9gCz/wS3tQ/VfbZIyCmm1hOf+sC6oDeHvKn20cDjdL9y636DQBKEoC+hgmkv1fofn I0+xgNY+1OQxxDzBfsKNkypfAMZPjm6dJW/qkdNNnqIQ==;"
          },
          {
            key: "arc-message-signature",
            value: "i=1; a=rsa-sha256; s=2022; d=email.cloudflare.net; c=relaxed/relaxed; h=Date:Subject:To:From:reply-to:cc:resent-date:resent-from:resent-to :resent-cc:in-reply-to:references:list-id:list-help:list-unsubscribe :list-subscribe:list-post:list-owner:list-archive; t=1689941161; bh=0RwqgPE qXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=VSZtRgqnzv4sh1Q4Hg85fMx256sdlDs4JH eF9jknZHaDybG9adFJx/nnQPsYtmuFF4SDTRNQ6A7hrcCUtIgIaq3LUxnydvGEM1UG7di86zypO LxivsekZpEE2Rb2c6kBL1kUbDfqANXmrklXI1GtY7pMvGWFtRVI+EQj2sV3g4bUvNxFxM+sOofS cu8un2cN1D/JVC+emh05FUy+Hj2Tju3GCebro1q7WzREpKeMfeIvDnTxP87EtPrWyfvBEvdyX0K hIQjUxr0MUH45iFLUvp5EarYYIhOqe/ViHDH2SyDV8kroRngw7IbFLfxrvojGcE/YtJhgwtaEtE 3mfcHI/A==;"
          },
          {
            key: "arc-authentication-results",
            value: "i=1; mx.cloudflare.net; dkim=pass header.d=nicovideo.jp header.s=hzpqopno5yw5xismcf4zscglxy5huoyn header.b=h/Z85jC5; dkim=pass header.d=amazonses.com header.s=zh4gjftm6etwoq6afzugpky45synznly header.b=ItXso5Rm; dmarc=none header.from=nicovideo.jp policy.dmarc=none; spf=pass (mx.cloudflare.net: domain of postmaster@e235-151.smtp-out.ap-northeast-1.amazonses.com designates 23.251.235.151 as permitted sender) smtp.helo=e235-151.smtp-out.ap-northeast-1.amazonses.com; spf=pass (mx.cloudflare.net: domain of 010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com designates 23.251.235.151 as permitted sender) smtp.mailfrom=010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com; arc=none smtp.remote-ip=23.251.235.151"
          },
          {
            key: "dkim-signature",
            value: "v=1; a=rsa-sha256; s=2022; d=email.cloudflare.net; c=relaxed/relaxed; h=Date:Subject:To:From:reply-to:cc:resent-date:resent-from:resent-to :resent-cc:in-reply-to:references:list-id:list-help:list-unsubscribe :list-subscribe:list-post:list-owner:list-archive; t=1689941161; bh=0RwqgPE qXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=Fzbj5GIDwcXWDG9mx6s340qFvodlXBpnhK KoEOagfhTWU86Yi0DFum5fcYmX8oMmoqFaP6nVFSn3NUBXcCgyihbDyrwJ+BbEoEX6MNkY4CxrZ tazvVpEj5+8HRKKE1GAfJrUhVziryPU+WpI3vGZx94lTEplhLPiW/sd8+rI37gcmvgmyx2KElgo uvY/hfn9R3RRlVEjJ8/IkEei3TsmpN7ov/EgNv4HjiBWYAQgchplQAJIUfRpmafoHLcLUmQL6og R3p4uz4/9o8elPL2VnJRnVzeoNpWZOHOzvRbuxQZ9XIE+mpfWwwsLv0577G9WqfLjPS65Rbhb01 oP/8ZUdw==;"
          },
          {
            key: "dkim-signature",
            value: "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=hzpqopno5yw5xismcf4zscglxy5huoyn; d=nicovideo.jp; t=1689941159; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Message-ID:Date; bh=0RwqgPEqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=h/Z85jC5YfRSxty5gJjWbCNttBw4I8qqFISxVay0xSN4zcjKQCa8l8JtWLmXTttl 37ton7jsY9YPY8UJ/ockJg6HhvjrkLB2ZDaM6ckXblzBUqOpC0dKdo1fSJAb1XGrMl3 tbtCHpEFb3A2IgjtqXpfoZ41qRPd/+S50ZImaL2w="
          },
          {
            key: "dkim-signature",
            value: "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=zh4gjftm6etwoq6afzugpky45synznly; d=amazonses.com; t=1689941159; h=From:To:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Message-ID:Date:Feedback-ID; bh=0RwqgPEqXNKRe6diQj18OhEqiyLh6aHKO3oU8lUeauw=; b=ItXso5Rm8AW6WtCt7BvNm6t1bOhQ1VRpdGos51th1wXivG22X8Xou8xZpqr9t8lG D25T7wa1mpZywG85U4V1dcxF8JxGSb6+X3GdnpQiT6Btl3pxwXYJ08M24SkfORfPLyK xhh7xYQ+mXleU+61i4/ebYoi66POXLqjwAXvxQN4="
          },
          {
            key: "from",
            value: "niconico <account@nicovideo.jp>"
          },
          {
            key: "to",
            value: "admin@lain.im"
          },
          {
            key: "subject",
            value: "=?utf-8?B?44OL44Kz44OL44Kz55m76Yyy5qGI5YaF44Oh44O844Or?="
          },
          {
            key: "mime-version",
            value: "1.0"
          },
          {
            key: "content-type",
            value: "text/plain; charset=utf-8"
          },
          {
            key: "content-transfer-encoding",
            value: "base64"
          },
          {
            key: "message-id",
            value: "<010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com>"
          },
          {
            key: "date",
            value: "Fri, 21 Jul 2023 12:05:59 +0000"
          },
          {
            key: "feedback-id",
            value: "1.ap-northeast-1.eJEzhQdM3sUuLXbCWj4AGCNzZSGT9Sy44Dd6zn1Cb6k=:AmazonSES"
          },
          {
            key: "x-ses-outgoing",
            value: "2023.07.21-23.251.235.151"
          }
        ],
        from: {
          address: "account@nicovideo.jp",
          name: "niconico"
        },
        to: [
          {
            address: "admin@lain.im",
            name: ""
          }
        ],
        subject: "ニコニコ登録案内メール",
        messageId: "<010601897857ac9a-ce325703-afd6-4b23-8a1d-f5750942e9d9-000000@ap-northeast-1.amazonses.com>",
        date: "2023-07-21T12:05:59.000Z",
        text: "\nニコニコへようこそ！\n\n\n下記のURLにアクセスして、登録をお願いします。\n\n\nhttps://account.nicovideo.jp/register/profile?token=437490a78b87b584c367db59e1a4377fc8ad4f914ffc2c55691d9134668863f2\n\n登録完了後、登録したメールアドレスとパスワードで、ニコニコにログインすることができます。\n\n\n※このメールに心あたりがない場合は、このメールは破棄してください。\n\n\n---------------------------------------------------------------------\n※このメールは株式会社ドワンゴからニコニコに登録されているメールアドレス宛に送信しています。\n※配信専用のアドレスのため返信することはできません\n---------------------------------------------------------------------\n■ニコニコヘルプ\nhttps://qa.nicovideo.jp/?site_domain=default\n\n運営会社：株式会社ドワンゴ（https://dwango.co.jp/）\n連絡先　：〒104-0061　東京都中央区銀座四丁目12番15号　歌舞伎座タワー\n───────────────────────────────────\n (C) DWANGO Co., Ltd.\n\n\n",
        attachments: []
      }
    })
  }
]

console.log(JSON.stringify(data));